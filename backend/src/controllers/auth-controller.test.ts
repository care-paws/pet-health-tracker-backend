import { vi, describe, it, beforeEach, expect } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { authController } from './auth-controller.js';
import { registerSchema } from '../types/auth-types.js';
import { hash } from '../utils/auth.js';

vi.mock('../types/auth-types.js', () => ({
  registerSchema: { parse: vi.fn() },
}));

vi.mock('../utils/auth.js', () => ({
  hash: vi.fn(),
}));

describe('auth-controller', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  describe('register', () => {
    it('hashes the password and calls authService.register', async () => {
      vi.mocked(hash).mockResolvedValue('hash123');
      const reqBody = {
        email: 'user@email.com',
        password: 'secret123',
      };
      const req: Partial<Request> = {
        body: reqBody,
      };
      const res: Partial<Response> = {
        status: vi.fn().mockReturnThis(),
        send: vi.fn(),
      };
      const next: Partial<NextFunction> = vi.fn();

      vi.mocked(registerSchema.parse).mockReturnValue(reqBody);
      const deps = {
        authService: {
          register: vi.fn().mockResolvedValue(undefined),
          login: vi.fn(),
        },
      };

      const controller = authController(deps);
      await controller.register(
        req as Request,
        res as Response,
        next as NextFunction
      );
      expect(registerSchema.parse).toHaveBeenCalled();
      expect(hash).toHaveBeenCalledWith('secret123');
      expect(deps.authService.register).toHaveBeenCalledWith({
        email: 'user@email.com',
        passwordHash: 'hash123',
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith('User registered.');
      expect(next).not.toHaveBeenCalled()
    });
  });
});

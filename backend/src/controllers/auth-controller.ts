import type { ControllerDeps } from '../types/auth-types.js';
import type { Request, Response, NextFunction } from 'express';
import { registerSchema } from '../types/auth-types.js';
import { hash } from '../utils/auth.js';

export const authController = (deps: ControllerDeps) => ({
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = registerSchema.parse(req.body);
      const hashedPassword = await hash(data.password);
      await deps.authService.register({
        email: data.email,
        passwordHash: hashedPassword,
      });
      res.status(201).send('User registered.');
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {},
});

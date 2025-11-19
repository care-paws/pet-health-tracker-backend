import type { ControllerDeps } from '../types/auth-types.js';
import type { Request, Response, NextFunction } from 'express';

export const authController = (deps: ControllerDeps) => ({
  register: async (req: Request, res: Response, next: NextFunction) => {},

  login: async (req: Request, res: Response, next: NextFunction) => {},
});

import type { Request, Response, NextFunction } from 'express';

export const Auth = (req: Request, res: Response, next: NextFunction) => {
  // Simulamos un usuario autenticado
  (req as any).user = {
    userId: "3e33b4c9-1e18-4a3a-a9fe-32fa1f3f12ab",
    email: "usuario@test.com"
  };

  next();
};

export default Auth;
import type { Request, Response, NextFunction } from 'express';  
  
export const cleanupController = (deps: { cleanupService: any }) => ({  
  clearDatabase: async (_req: Request, res: Response, next: NextFunction) => {  
    try {  
      await deps.cleanupService.clearAllData();  
      res.status(200).json({ message: 'Database cleared successfully' });  
    } catch (error) {  
      next(error);  
    }  
  }  
});
import express from 'express';
import type { Express } from 'express';
import authRouter from './auth-router.js';

import petRouter from './pets-router.js';

const apiRouter = (app: Express) => {
  const router = express.Router();
  router.use('/api/auth', authRouter);

  
  //Montar el pets Router
  router.use('/api/pets',petRouter);

  app.use(router);
};

export default apiRouter;

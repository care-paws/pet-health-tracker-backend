import express from 'express';  
import { cleanupController } from '../controllers/cleanup-controller.js';  
import { cleanupService } from '../services/index.js';  
  
const router = express.Router();  
const controller = cleanupController({ cleanupService });  
  
router.delete('/clear', controller.clearDatabase);  
  
export default router;
import prisma from '../client.js';

import { AuthService } from './auth-service.js';

export const authService = new AuthService(prisma);

import type { PrismaClient } from '@prisma/client';

export class AuthService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async register() {}

  async login() {}
}

import type { PrismaClient } from '../generated/prisma/client.js';  
  
export class CleanupService {  
  prisma: PrismaClient;  
  
  constructor(prisma: PrismaClient) {  
    this.prisma = prisma;  
  }  
  
  async clearAllData(): Promise<void> {  
    // Eliminar en orden inverso para respetar las relaciones  
    await this.prisma.reminder.deleteMany({});  
    await this.prisma.event.deleteMany({});  
    await this.prisma.pet.deleteMany({});  
    await this.prisma.user.deleteMany({});  
  }  
}
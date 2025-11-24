import type { PrismaClient } from '@prisma/client';
import { error } from 'console';

export class PetService {
  prisma: PrismaClient;                 

  constructor(prisma: PrismaClient) {   
    this.prisma = prisma;
  }

    async register({
    userId,    
    name,     
    species, 
    breed,    
    age,     
    weight,   
    photoUrl, 
   
  }: {
    userId: string; 
    name: string;
    species?: string;
    breed?: string;
    age?: number;
    weight?: number;
    photoUrl?: string;
    
  }) {
    
    //realizar todas las validaciones
    if (!name)   { throw new Error ("El nombre es obligatorio"); }   

    if (typeof name !== "string") {
      throw new Error("El nombre debe ser  texto");
    }

    if (typeof species !== "string") {
      throw new Error("La especie debe ser texto");
    }

    if (typeof breed !== "string") {
      throw new Error("La raza debe ser texto");
    }

    if (typeof age !== "number" || age <= 0) {
      throw new Error("La edad debe ser un número mayor que 0");
    }

    if (typeof weight !== "number" || weight <= 0) {
      throw new Error("El peso debe ser un número mayor que 0");
    }

    if (photoUrl && typeof photoUrl !== "string") {
      throw new Error("La foto debe ser una URL válida");
    }


    return await this.prisma.pet.create({
      data: {
        userId,
        name,
        species,
        breed,
        age,
        weight,
        photoUrl,    

      },

    });

  }  

}

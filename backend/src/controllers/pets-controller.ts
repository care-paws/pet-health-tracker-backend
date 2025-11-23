import { register } from 'module';
import type {ControllerDeps} from '../types/pets-types.js';
import type { Request, Response, NextFunction } from 'express';

export const petController = (deps:ControllerDeps) => ({
    registerPet: async (req:Request, res: Response , next: NextFunction ) => {
        try{

            const userId = (req as any).user.userId; //recibo el usuario        

            const { name, species, breed, age, weight, photoUrl } = req.body;

            //const userId = req.body.userId; //debo recibir el id de la autenticacion

            console.log ("BODY RECIBIDO:", req.body);          
            
            const newPet = await deps.petService.register({userId, name, species, breed, age, weight, photoUrl});    

            return res.status(201).json({ 
                message:"Su mascota fue registrada con exito", 
                data: newPet, 
            });

        }catch(error: any){
            
            return res.status (400).json({error: error.message });
            
        }      

    },

    consultPet: async (req: Request, res: Response, next: NextFunction) => {
        
    },

    consultPetId: async (req: Request, res: Response, next: NextFunction) => {
        
    },

     editPetId: async (req: Request, res: Response, next: NextFunction) => {
       
    },
    
    eliminatePetId: async (req: Request, res: Response, next: NextFunction) => {
        
    },

});

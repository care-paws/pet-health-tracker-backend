import type { PetService } from "../services/pets-service.js";

export interface ControllerDeps {
    petService: InstanceType<typeof PetService>; 
    
}
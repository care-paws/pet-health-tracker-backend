import {petService} from '../services/index.js';
import {petController} from '../controllers/pets-controller.js';
import express from 'express';

import { Auth } from '../middleware/auth.js';      //debo tener la autenticacion del usuario (ID)

const controller = petController ({petService});

const router = express.Router();

//--------- aplica el middleware  -----------//
//--------- aplica el middleware  -----------//

router.use(Auth);   

//--------- Rutas -----------//
router.post('/',controller.registerPet);

router.get('/',controller.consultPet); 

router.get('/:id',controller.consultPetId); 

router.delete('/:id',controller.eliminatePetId); 

router.put('/',controller.editPetId);

  export default router;
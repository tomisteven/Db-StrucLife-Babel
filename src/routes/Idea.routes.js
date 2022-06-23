import {Router} from 'express';

import {
    createIdea,
    getIdea,
    deleteIdea,
} from '../controllers/Idea.controller.js';

const router = Router()

//rutas de la aplicacion
router.get('/', getIdea)
router.post('/newidea', createIdea)
router.delete('/deleteidea/:id', deleteIdea)

export default router;
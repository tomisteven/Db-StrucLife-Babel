import {Router} from 'express';

import {
    createTurn,
    getTurns,
    deleteTurn,
    completeTurn
} from '../controllers/Turn.controller.js';

const router = Router()

//rutas de la aplicacion
router.get('/', getTurns)
router.post('/newturn', createTurn)
router.delete('/deleteturn/:id', deleteTurn)
router.put('/completeturn/:id', completeTurn)


export default router;
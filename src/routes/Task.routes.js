import {Router} from 'express';

import {createTask, getTasks, deleteTask, completeTask} from '../controllers/Task.controller.js';

const router = Router()

//rutas de la aplicacion
router.get('/', getTasks)
router.post('/newtask', createTask)
router.delete('/deletetask/:id', deleteTask)
router.put('/completetask/:id', completeTask)






export default router;
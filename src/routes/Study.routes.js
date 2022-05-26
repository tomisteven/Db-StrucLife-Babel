import {Router} from 'express';

import {getStudyes , createStudy,  editStudy, finaliceStudy, deleteStudy} from '../controllers/Study.controller';

const router = Router()

//rutas de la aplicacion
router.get('/', getStudyes)
router.post('/newStudy', createStudy)
router.delete('/deletestudy/:id', deleteStudy)
router.put('/finalicestudy/:id', finaliceStudy)
router.put('/editstudy/:id', editStudy)


export default router;
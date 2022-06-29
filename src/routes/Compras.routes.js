import {Router} from 'express';
import{ 
    createCompra,
    getCompras,
    deleteItemCompra,
    deleteCompra,
    compraComplete,
    addItemCompra
} from '../controllers/Compras.controller.js';

const router = Router()

//rutas de la aplicacion
router.get('/', getCompras)
router.post('/newCompra', createCompra)
router.post('/newCompra/additem/:id', addItemCompra)
router.delete('/newCompra/:id_compra/delitem/:id_product', deleteItemCompra)
router.delete('/deletecompra/:id', deleteCompra)
router.put('/completecompra/:id', compraComplete)

router.get('/test/:id_compra/compra/:id_product', (req, res) => {
    const {id_product, id_compra} = req.params;
    
    const compra = {
        id_compra,
        id_product,
    }
    res.json(compra);
})


export default router;
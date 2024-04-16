import express from 'express'
import { getProductById, getProducts, insertProduct, updateProduct } from '../controllers/products.controller';
import { logMiddleareRegistry } from '../middleware/log';

/*Utilizamos el router de express para armar nuestros endpoints. 
En este caso de un CRUD para products*/

const router = express.Router();

router.post('/', logMiddleareRegistry('PRODUCT INSERT INFO'), insertProduct)

router.get('/', logMiddleareRegistry('ALL PRODUCTS INFO'), getProducts)

router.get('/:id', logMiddleareRegistry('PRODUCT INFO'), getProductById)

router.put('/:id', logMiddleareRegistry('UPDATE PRODUCT INFO'), updateProduct)


export { router as productsRouter };
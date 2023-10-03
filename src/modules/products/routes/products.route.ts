import { Router } from 'express';
import ProductsController from '../controllers/ProductController';

const productsRoute = Router();
const productsController = new ProductsController();

productsRoute.get('/', productsController.index);
productsRoute.get('/:id', productsController.showProduct);
productsRoute.post('/', productsController.createProduct);
productsRoute.put('/:id', productsController.updateProduct);
productsRoute.delete('/:id', productsController.deleteProduct);

export default productsRoute;

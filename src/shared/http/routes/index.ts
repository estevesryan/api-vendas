import productsRoute from '@modules/products/routes/products.route';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRoute);

export default routes;

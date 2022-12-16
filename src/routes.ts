import { Router } from 'express';

import DefaultRouter from './domain/status/infra/routes/default.route';
import ProductRouter from './domain/product/product.routes';

const Routes = Router();

Routes.use('/', DefaultRouter);
Routes.use('/product', ProductRouter);

export default Routes;

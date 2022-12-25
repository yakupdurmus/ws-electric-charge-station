import { Router } from 'express';

import DefaultRouter from './modules/status/infra/routes/default.route';
import ProductRouter from './modules/product/product.routes';

const Routes = Router();

Routes.use('/', DefaultRouter);
Routes.use('/product', ProductRouter);

export default Routes;

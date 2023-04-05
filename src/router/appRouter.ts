import { Router } from 'express';
import restrictedListRouter from './restrictedListRouter';
import swaggerRouter from './swaggerRouter';

const appRouter = Router();

appRouter.use(restrictedListRouter);
appRouter.use(swaggerRouter);

export default appRouter;

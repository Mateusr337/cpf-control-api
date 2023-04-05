import { Router } from 'express';
import restrictedListRouter from './restrictedListRouter';

const appRouter = Router();

appRouter.use(restrictedListRouter);

export default appRouter;

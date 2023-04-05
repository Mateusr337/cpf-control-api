import { Router } from 'express';
import cpfController from '../controller/restrictedListController';
import validateCpfMiddleware from '../middleware/validateCpfMiddleware';

const restrictedListRouter = Router();

restrictedListRouter.post('/cpf', validateCpfMiddleware, cpfController.create);

export default restrictedListRouter;

import { Router } from 'express';
import restrictedListController from '../controller/restrictedListController';
import createCpfRequestSchema from '../domain/schemas/createCpfRequestSchema';
import validateCpfMiddleware from '../middleware/validateCpfMiddleware';
import { validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware';

const restrictedListRouter = Router();

restrictedListRouter.post(
  '/cpf',
  validateSchemaMiddleware(createCpfRequestSchema),
  validateCpfMiddleware,
  restrictedListController.create,
);

restrictedListRouter.get('/cpf/:cpf', validateCpfMiddleware, restrictedListController.findByCpf);

export default restrictedListRouter;

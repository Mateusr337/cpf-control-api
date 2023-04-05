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
restrictedListRouter.delete('/cpf/:cpf', validateCpfMiddleware, restrictedListController.deleteByCpf);
restrictedListRouter.get('/cpf/:cpf', validateCpfMiddleware, restrictedListController.findByCpf);
restrictedListRouter.get('/cpf', restrictedListController.findAll);

export default restrictedListRouter;

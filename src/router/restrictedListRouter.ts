import { Router } from 'express';
import cpfController from '../controller/restrictedListController';
import createCpfRequestSchema from '../domain/schemas/createCpfRequestSchema';
import validateCpfMiddleware from '../middleware/validateCpfMiddleware';
import { validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware';

const restrictedListRouter = Router();

restrictedListRouter.post(
  '/cpf',
  validateSchemaMiddleware(createCpfRequestSchema),
  validateCpfMiddleware,
  cpfController.create,
);

export default restrictedListRouter;

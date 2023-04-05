import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecConfig from '../config/swaggerSpecConfig';

const swaggerRouter = Router();

swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecConfig));

export default swaggerRouter;

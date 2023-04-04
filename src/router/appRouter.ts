import { Router } from "express";
import cpfRouter from "./cpfRouter";

const appRouter = Router();

appRouter.use(cpfRouter);

export default appRouter;

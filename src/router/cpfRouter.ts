import { Router } from "express";
import cpfController from "../controller/cpfController";

const cpfRouter = Router();

cpfRouter.post("/cpf", cpfController.create);

export default cpfRouter;

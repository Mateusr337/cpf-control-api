import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import "./config/setupConfig";
import router from "./router/appRouter";
import handlerError from "./utils/handlerError";

const app = express();

app.use(json());
app.use(cors());
app.use(router);

app.use(handlerError.errorHandlingMiddleware);

export default app;

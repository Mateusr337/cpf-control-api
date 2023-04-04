import cors from "cors";
import handlerException from "domain/exception/globalHandlerException/handlerException";
import express, { json } from "express";
import "express-async-errors";
import "./config/setupConfig";
import router from "./router/appRouter";

const app = express();

app.use(json());
app.use(cors());
app.use(router);

app.use(handlerException);

export default app;

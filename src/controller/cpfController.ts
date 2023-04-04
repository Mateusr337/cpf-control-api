import { Request, Response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
  res.status(httpStatus.CREATED).send("CREATED");
}

export default {
  create,
};

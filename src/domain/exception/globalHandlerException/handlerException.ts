import { Exception } from "domain/type/exception/exception";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import existsCpfException from "../existsCpfException";
import invalidCpfException from "../invalidCpfException";
import notFoundCpfException from "../notFoundCpfException";

export default function handlerException(
  error: Exception,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === invalidCpfException.type)
    return res.status(httpStatus.BAD_REQUEST).send(error);

  if (error.type === existsCpfException.type)
    return res.status(httpStatus.CONFLICT).send(error);

  if (error.type === notFoundCpfException.type)
    return res.status(httpStatus.NOT_FOUND).send(error);

  console.log(error);
  return res.sendStatus(500);
}

import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

type Error = {
  type: string;
  message: string;
  status: number;
};

function errorHandlingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "not_found_error")
    return res.status(error.status).send(error.message);
  if (error.type === "bad_request_error")
    return res.status(error.status).send(error.message);
  if (error.type === "unauthorized_error")
    return res.status(error.status).send(error.message);
  if (error.type === "conflict_error")
    return res.status(error.status).send(error.message);
  if (error.type === "internal_server_error")
    return res.status(error.status).send(error.message);

  console.log(error);
  return res.sendStatus(500);
}

function notFoundError(entity: string): Error {
  return {
    type: "not_found_error",
    message: `[ ${entity} ] not found.`,
    status: httpStatus.NOT_FOUND,
  };
}

function conflictRequestError(entity: string): Error {
  return {
    type: "conflict_error",
    message: `[ ${entity} ] already exist.`,
    status: httpStatus.CONFLICT,
  };
}

function badRequestError(message: string): Error {
  return {
    type: "bad_request_error",
    message: message,
    status: httpStatus.BAD_REQUEST,
  };
}

function unauthorizedError(): Error {
  return {
    type: "unauthorized_error",
    message: `Unauthorized.`,
    status: httpStatus.UNAUTHORIZED,
  };
}

function forbiddenError(): Error {
  return {
    type: "unauthorized_error",
    message: `Unauthorized.`,
    status: httpStatus.FORBIDDEN,
  };
}

function internalError(): Error {
  return {
    type: "internal_server_error",
    message: `Internal server error.`,
    status: httpStatus.INTERNAL_SERVER_ERROR,
  };
}

export default {
  errorHandlingMiddleware,
  unauthorizedError,
  badRequestError,
  conflictRequestError,
  notFoundError,
  internalError,
  forbiddenError,
};

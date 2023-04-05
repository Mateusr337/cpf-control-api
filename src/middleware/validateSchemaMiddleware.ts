import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';
import invalidCpfException from '../domain/exception/invalidCpfException';

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(httpStatus.BAD_REQUEST).send(invalidCpfException);
    }
    next();
  };
}

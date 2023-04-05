import { NextFunction, Request, Response } from 'express';
import invalidCpfException from '../domain/exception/invalidCpfException';
import isValidCpf from '../util/isValidCpf';

export default function validateCpfMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!isValidCpf(req.body.cpf)) throw invalidCpfException;
  next();
}

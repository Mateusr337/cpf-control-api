import { Request, Response } from 'express';
import httpStatus from 'http-status';
import restrictedListService from '../service/restrictedListService';

async function create(req: Request, res: Response) {
  const createdCpf = await restrictedListService.create(req.body.cpf);
  res.status(httpStatus.CREATED).send(createdCpf);
}

async function findByCpf(req: Request, res: Response) {
  const foundCpf: any = await restrictedListService.findByCpf(req.params.cpf);
  delete foundCpf.id;
  res.status(httpStatus.OK).send(foundCpf);
}

export default {
  create,
  findByCpf,
};

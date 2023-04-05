import { Request, Response } from 'express';
import httpStatus from 'http-status';
import restrictedListService from '../service/restrictedListService';
import removeCpfId from '../util/removeCpfId';

async function create(req: Request, res: Response) {
  const createdCpf = await restrictedListService.create(req.body.cpf);
  const formattedCpf = removeCpfId([createdCpf])[0];
  res.status(httpStatus.CREATED).send(formattedCpf);
}

async function findByCpf(req: Request, res: Response) {
  const foundCpf = await restrictedListService.findByCpf(req.params.cpf);
  const formattedCpf = removeCpfId([foundCpf])[0];
  res.status(httpStatus.OK).send(formattedCpf);
}

async function findAll(req: Request, res: Response) {
  const cpfList = await restrictedListService.findAll();
  const formattedCpfList = removeCpfId(cpfList);
  res.status(httpStatus.OK).send(formattedCpfList);
}

async function deleteByCpf(req: Request, res: Response) {
  await restrictedListService.deleteByCpf(req.params.cpf);
  res.sendStatus(httpStatus.NO_CONTENT);
}

export default {
  create,
  findByCpf,
  findAll,
  deleteByCpf,
};

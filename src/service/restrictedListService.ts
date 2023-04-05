import ExistsCpfException from '../domain/exception/existsCpfException';
import notFoundCpfException from '../domain/exception/notFoundCpfException';
import restrictedListRepository from '../repository/restrictedListRepository';

async function create(cpf: string) {
  const foundCpf = await restrictedListRepository.findByCpf(cpf);
  if (foundCpf) throw ExistsCpfException;
  return await restrictedListRepository.create(cpf);
}

async function findByCpf(cpf: string) {
  const foundCpf = await restrictedListRepository.findByCpf(cpf);
  if (!foundCpf) throw notFoundCpfException;
  return foundCpf;
}

export default {
  create,
  findByCpf,
};

import ExistsCpfException from '../domain/exception/existsCpfException';
import notFoundCpfException from '../domain/exception/notFoundCpfException';
import cpfRepository from '../repository/restrictedListRepository';

async function create(cpf: string) {
  const foundCpf = await cpfRepository.findByCpf(cpf);
  if (foundCpf) throw ExistsCpfException;
  return await cpfRepository.create(cpf);
}

async function findByCpf(cpf: string) {
  const foundCpf = await cpfRepository.findByCpf(cpf);
  if (!foundCpf) throw notFoundCpfException;
  return foundCpf;
}

export default {
  create,
  findByCpf,
};

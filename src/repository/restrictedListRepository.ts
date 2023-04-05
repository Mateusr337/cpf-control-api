import db from '../config/databaseConfig';

async function create(cpf: string) {
  return await db.restrictedCpf.create({ data: { cpf } });
}

async function findByCpf(cpf: string) {
  return await db.restrictedCpf.findUnique({ where: { cpf } });
}

async function findAll() {
  return await db.restrictedCpf.findMany();
}

async function deleteByCpf(cpf: string) {
  return await db.restrictedCpf.delete({ where: { cpf } });
}

export default {
  create,
  findByCpf,
  findAll,
  deleteByCpf,
};

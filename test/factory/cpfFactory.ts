import db from '../../src/config/databaseConfig';

async function create(cpf: string) {
  return await db.restrictedCpf.create({ data: { cpf } });
}

export default {
  create,
};

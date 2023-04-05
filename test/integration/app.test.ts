import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '../../src/app';
import db from '../../src/config/databaseConfig';

beforeEach(async () => {
  await db.$connect();
  await db.restrictedCpf.deleteMany();
}, 10000);

afterAll(async () => await db.$disconnect());

const server = supertest(app);

describe('Restricted List integration tests', () => {
  it('POST /cpf - Should answer with included cpf and status code CREATED', async () => {
    const request = { cpf: '87511509053' };

    const response = await server.post('/cpf').send(request);
    const restrictedCpf = await db.restrictedCpf.findFirst();

    expect(response.status).toEqual(httpStatus.CREATED);
    expect(response.body.id).not.toBeNull();
    expect(response.body.cpf).toEqual(request.cpf);
    expect(response.body.createAt).not.toBeNull();
    expect(restrictedCpf?.cpf).toEqual(request.cpf);
  });
});

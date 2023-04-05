import joi from 'joi';

const createCpfRequestSchema = joi.object({
  cpf: joi.number().positive().integer().required(),
});

export default createCpfRequestSchema;

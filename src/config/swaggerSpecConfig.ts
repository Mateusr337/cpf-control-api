import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    info: {
      title: 'Restricted CPF System',
      version: '1.0.0',
      description: 'Restricted CPF system to control and consult CPFs with fraud potential.',
      contact: {
        name: 'Mateus Cruz Rossetto',
        url: 'https://github.com/Mateusr337',
        email: 'mateusc.rossetto@hotmail.com',
      },
    },
    servers: [
      {
        local_server: 'http://localhost:{PORT}',
        deploy_server: 'https://restricted-cpf-system-api.onrender.com',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpecConfig = swaggerJSDoc(options);
export default swaggerSpecConfig;

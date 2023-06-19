const { version } = require('../package.json');
const requestBodies = require('./requestBodies');
const responses = require('./responses');

const doc = {
  info: {
    version,
    title: 'Slim Mom OpenAPI ' + version,
    description: 'Swagger SlimMom openAPI',
  },
  servers: [
    {
      url: `https://slimmom-s41d.onrender.com`,
    },
    {
      url: `http://localhost:3001`,
    },
  ],
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Auth',
      description: 'Authorization endpoints',
    },
    {
      name: 'User',
      description: 'User endpoints',
    },
    {
      name: 'Diary',
      description: 'Diary endpoints',
    },
    {
      name: 'Products',
      description: 'Products endpoints',
    },
  ],
  components: {
    requestBodies,
    responses,
    schemas: {
      ...requestBodies,
      ...responses,
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = doc;

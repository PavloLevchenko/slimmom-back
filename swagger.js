const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.3',
  disableLogs: false,
});
const doc = require('./swagger/doc');

swaggerAutogen('./swagger.json', ['./swagger/routes/*'], doc);

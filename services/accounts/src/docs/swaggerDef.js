const { version } = require('../../package.json');
const config = require('../config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/sajalshres/avidboard',
    },
  },
  schemes: ['http'],
  servers: [
    {
      url: `http://dev.master:${config.port}/api/accounts/`,
    },
  ],
};

module.exports = swaggerDef;

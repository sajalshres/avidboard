const express = require('express');
const utilsRoute = require('./utils.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/utils',
    route: utilsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

const { Router } = require('express');
const weatherRouter = Router();

const weather = require("./weather");

weatherRouter.use('/', weather);

module.exports = weatherRouter;
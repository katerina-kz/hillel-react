const { Router } = require('express');
const apiRouter = Router();

const order = require("./order");

apiRouter.use('/order', order);

module.exports = apiRouter;
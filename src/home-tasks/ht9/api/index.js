const { Router } = require('express');
const apiRouter = Router();

const todos = require("./todo");

apiRouter.use('/todos', todos);

module.exports = apiRouter;
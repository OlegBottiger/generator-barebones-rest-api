const Express = require('express');
const healthRouter = Express.Router();

healthRouter.get('/', async (req, res) => {
  res.send({ uptime: process.uptime() });
})

module.exports = healthRouter;
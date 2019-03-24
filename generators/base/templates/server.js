const gracefulShutdown = require('http-graceful-shutdown');
const app = require('./src/app');

const PORT = process.env.PORT;
const SHUTDOWN_TIMEOUT = process.env.SHUTDOWN_TIMEOUT;

const server = app.listen(PORT);
console.log('------------------------------------');
console.log(`Server running on port: ${PORT}`);
console.log('------------------------------------');

gracefulShutdown(server, { timeout: SHUTDOWN_TIMEOUT });

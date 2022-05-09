const createServer = require('./server.js');
const routes = require('./routes');

const port = 3009;

createServer(routes, port, true);

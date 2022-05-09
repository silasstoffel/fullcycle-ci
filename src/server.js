const express = require('express');

const app = express();

const createServer = (routes, port = 3009, autoStart = true) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
  
  if (autoStart) {
    app.listen(port, () => {
      console.info(`App is Running on Port ${port}`);
    });
  }

  return app;
};

module.exports = createServer;

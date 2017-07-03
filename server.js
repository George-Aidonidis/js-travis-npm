'use strict';

const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', routes.indexRouteHandler);

const server = app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});

module.exports = server;

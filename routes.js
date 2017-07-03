'use strict';

function indexRouteHandler(req, res) {
  res.status(200).send('Hello there!');
}

module.exports = {
  indexRouteHandler
};

'use strict';

const chai = require('chai');

const expect = chai.expect;

/* eslint  no-unused-expressions: "off", global-require: "off" */
describe('routes', () => {
  it('routes.js file exists', () => {
    const routes = require('../routes');
    expect(routes).to.exist;
  });
});

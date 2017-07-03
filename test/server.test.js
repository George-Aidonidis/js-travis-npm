'use strict';

const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

/* eslint  no-unused-expressions: "off", global-require: "off" */
describe('server', () => {
  let server;
  beforeEach(() => {
    server = require('../server');
  });
  afterEach((done) => {
    server.close(done);
    done();
    // Solve error when watching tests
    delete require.cache[require.resolve('./server')];
  });

  it('server.js file exists', () => {
    expect(server).to.exist;
  });
  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

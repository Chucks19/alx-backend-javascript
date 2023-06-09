const request = require('request');
const chai = require('chai');

const expect = chai.expect;

describe('index page', () => {
  it('tests the / endpoint', function (done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

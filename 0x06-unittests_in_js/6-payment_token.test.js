const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromApi = require('./6-payment_token');

describe('Calls getPaymentFromApi function', () => {
  it('Should return exact object response from API', (done) => {
    getPaymentTokenFromApi(true).then((response) => {
      expect(response).to.have.property('data');
      done();
    }).catch((err) => done(err));
  });
});

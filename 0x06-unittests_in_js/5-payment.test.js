// Using hooks for the spy
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const expect = chai.expect;

describe('Tests different calls to sendPaymentRequestToApi', () => {
  let logged;

  beforeEach(() => {
    logged = sinon.spy(console, 'log');
  });
  afterEach(() => {
    expect(logged.calledOnce).to.be.true;
    logged.restore();
  });

  it('Should log The total is: 120 once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(logged.calledWith('The total is: 10')).to.be.false;
  });
  it('Should log The total is: 20 once', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logged.calledWith('The total is: 20')).to.be.true;
  });
});

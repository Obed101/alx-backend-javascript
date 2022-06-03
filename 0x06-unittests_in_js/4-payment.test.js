const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

describe('Tests calls to calculateNumber using sendPaymentRequestToApi', () => {

  it('Should call calculate number once', () => {
    const stub = sinon.stub(utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    stub.restore();
  });
  it('Should log the total as 10 to console', () => {
    const stub = sinon.stub(utils, 'calculateNumber').returns(10);
    const logged = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(logged.calledWith('The total is: 10')).to.be.true;
    expect(stub.alwaysReturned(10)).to.be.true;
    logged.restore();
    stub.restore();
  });
  it('Should call calculate number with exactly 100, 20', () => {
    const stub = sinon.stub(utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    stub.restore();
  });
});

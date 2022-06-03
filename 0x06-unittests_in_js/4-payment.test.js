const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

describe('Tests calls to calculateNumber using sendPaymentRequestToApi', () => {
  const spy = sinon.spy(utils, 'calculateNumber');
  it('Should call calculate number once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
  it('Should call calculate number with exactly 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});

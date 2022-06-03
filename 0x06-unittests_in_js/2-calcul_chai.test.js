#!/usr/bin/env node

const calcul = require('./2-calcul_chai');
let expect = require('chai');
expect = expect.expect;

describe('Testing calculateNumber function with differemt types', function () {
  it('Should test SUM and return 2', () => {
    expect(calcul('SUM', 1.2, 1.4)).to.equal(2);
  });
  it('Should test SUBTRACT and return 14', () => {
    expect(calcul('SUBTRACT', 45.2, 30.9)).to.equal(14);
  });
  it('Should test DIVIDE and return 30', () => {
    expect(calcul('DIVIDE', 90.4, 3.3)).to.equal(30);
  });
  it('Should return an Error', () => {
    expect(calcul('DIVIDE', 90.4, 0)).to.equal('Error');
  });
});

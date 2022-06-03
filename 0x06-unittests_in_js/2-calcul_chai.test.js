#!/usr/bin/env node

const assert = require('assert');
const calcul = require('./1-calcul');
let expect = require('chai');
expect = expect.expect;

describe('Testing calculateNumber function with differemt types', function () {
  it('Should return sum of two rounded numbers', () => {
    expect(calcul('SUM', 1.2, 1.4)).to.equal(2);
  });
  it('Should return subtraction of two rounded numbers', () => {
    expect(calcul('SUBTRACT', 45.2, 30.9)).to.equal(14);
  });
  it('Should return division of two rounded numbers', () => {
    expect(calcul('DIVIDE', 90.4, 3.3)).to.equal(30);
  });
  it('Should return an Error', () => {
    expect(calcul('DIVIDE', 90.4, 0)).to.equal('Error');
  });
});

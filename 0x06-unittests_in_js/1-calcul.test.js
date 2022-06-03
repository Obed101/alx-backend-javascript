#!/usr/bin/env node

const assert = require('assert');
const calcul = require('./1-calcul');

describe('Testing calculateNumber function with differemt types', function () {
  it('Should return sum of two rounded numbers', () => {
    assert.equal(calcul('SUM', 1.2, 1.4), 2);
  });
  it('Should return subtraction of two rounded numbers', () => {
    assert.equal(calcul('SUBTRACT', 45.2, 30.9), 14);
  });
  it('Should return division of two rounded numbers', () => {
    assert.equal(calcul('DIVIDE', 90.4, 3.3), 30);
  });
  it('Should return division of zero Error', () => {
    assert.equal(calcul('DIVIDE', 90.4, 0), 'Error');
  });
});

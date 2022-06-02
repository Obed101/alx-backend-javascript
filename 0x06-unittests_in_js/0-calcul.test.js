#!/usr/bin/env node

const assert = require('assert');
const calcul = require('./0-calcul');

describe('Testing calculateNumber function', function () {
  it('Should return default sum of two rounded numbers', () => {
    assert.equal(calcul(1.2, 1.4), 2);
    console.log(calcul)
    assert.equal(calcul(300.9, 400), 800);
  });
});

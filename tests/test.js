'use strict'

var assert = require('assert');
var Intangible = require('../index.js');

describe('Intangible.isNumber', function() {
  it('should inheret Thing static method isNumber', function() {
    assert.equal(Intangible.isNumber(1), true);
    assert.equal(Intangible.isNumber('x'), false);
  });
});

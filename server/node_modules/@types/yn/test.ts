/// <reference path="bundle.d.ts" />

import yn = require('yn');
import assert = require('assert');

assert.equal(yn('TRUE'), true);
assert.equal(yn('no'), false);

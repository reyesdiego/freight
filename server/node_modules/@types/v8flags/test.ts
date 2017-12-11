/// <reference path="bundle.d.ts" />

import v8flags = require('v8flags');

v8flags(function (err, flags) {
  console.log(flags);
});

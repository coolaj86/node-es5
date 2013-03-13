#!/usr/bin/env node
(function () {
  "use strict";

  var spawn = require('child_process').spawn
    , stricty
    , args = process.argv
    ;

  // node === args[0]
  // /path/to/index.js === args[1]
  args.shift();
  args[0] = '--use_strict';

  //console.log(args);
  //stricty = spawn('node', args, { detached: true, stdio: 'inherit' });
  stricty = spawn('node', args, { stdio: 'inherit' });
  stricty.on('exit', function (code) {
    process.exit(code);
  });
}());

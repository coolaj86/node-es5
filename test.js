// This IIFE is redundant when run with node --use_strict
(function () {
  "use strict";

  function speak() {
    console.log('Hello World!');
  }

  setInterval(speak, 1000);
  speak();
}());

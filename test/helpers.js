// == Imports ===============================================================

const assert = require('chai').assert;

// == Constants =============================================================

// == Globals ===============================================================

global.assert = assert;

global.condition = function(block) {
  return new Promise((resolve, reject) => {
    function test() {
      if (block()) {
        resolve()
      }
      else {
        setTimeout(test, 10);
      }
    }

    test();
  });
}

// == Exported Functions ====================================================


// == Initialization ========================================================

// Force to the test enviromnent when testing
process.env.NODE_ENV = 'test';

// == Exports ===============================================================

module.exports = {
  assert: assert
};

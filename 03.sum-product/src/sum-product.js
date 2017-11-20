/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';

  function calculate(n, opts) {
    var result = 0;

    if (opts.mode == 'sum'){

      for(var i = 1; i <= n; i++){
        result += i;
      }

    } else if (opts.mode == 'product'){

        result = 1;
        for(var i = n; i >= 1; i--){
            result *= i;
        }

    } else if (opts.mode == 'math is hard') { throw 'Invalid calculation mode.'; }

    return result;
  }

  return {
    calculate: calculate
  };
};
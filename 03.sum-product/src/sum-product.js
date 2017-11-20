/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';

  function calculate(n, opts) {
    let result = 0;

    if (opts.mode == 'sum'){

      for(let i = 1; i <= n; i++){
        result += i;
      }

    } else if (opts.mode == 'product'){
        result = 1;
        for(let i = n; i >= 1; i--){
            result *= i;
        }
    } else if (opts.mode == 'math is hard') {
        throw 'Invalid calculation mode.';
    }

    return result;
  }

  return {
    calculate: calculate
  };
};
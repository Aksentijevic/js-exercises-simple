/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {

    let summed = 0;

    if ( n < 0 ){

      for(let i = -1; i >= n; i--){
          summed += i;
      }

    } else if ( n > 0 ) {

      for(let i = 1; i <= n; i++){
          summed += i;
      }

    }

    return summed;
    
  }

  return {
    sumNumbers: sumNumbers
  };
};
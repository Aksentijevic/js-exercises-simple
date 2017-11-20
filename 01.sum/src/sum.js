/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {

    var result = 0;

    if ( n < 0 ){

      for(var i = -1; i >= n; i--){
        result += i;
      }

    } else if ( n > 0 ) {

      for(var i = 1; i <= n; i++){
        result += i;
      }

    }

    return result;
  }

  return {
    sumNumbers: sumNumbers
  };
};
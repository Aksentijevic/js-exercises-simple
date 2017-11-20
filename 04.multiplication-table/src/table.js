/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {
    var table = [];
    var n = 5;

    for(var i=0; i<=n; i++) {
      table[i] = [];
        table[i][0] = i;
    }
    for(var i=1; i<=n; i++) {
        table[0][i] = i;
    }
    for(var i=1; i<=n; i++) {
        for(var j=1; j<=n; j++) {
          table[i][j] = i*j;
      }
    }

    return table;
  }

  return {
    generate5: generate5
  };
};
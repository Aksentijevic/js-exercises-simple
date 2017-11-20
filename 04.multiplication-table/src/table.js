/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {
    let table = [];
    let n = 5;

    for(let i=0; i<=n; i++) {
      table[i] = [];
        table[i][0] = i;
    }
    for(let i=1; i<=n; i++) {
        table[0][i] = i;
    }
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
          table[i][j] = i*j;
      }
    }

    return table;
  }

  return {
    generate5: generate5
  };
};
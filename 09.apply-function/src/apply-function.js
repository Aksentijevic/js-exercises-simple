/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {
    let result = [];
    for(let i = 0 ; i < list.length; i++){
      result[i] = f(list[i]);
    }
    return result;
  }

  return {
    applyFunction: applyFunction
  };
};
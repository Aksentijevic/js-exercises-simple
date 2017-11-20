/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {
  'use strict';

  function is(word) {
    if(word == word.split('').reverse().join('')) { return true }
    else { return false }
  }

  return {
    is: is
  };
};
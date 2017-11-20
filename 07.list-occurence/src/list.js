/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {
    let flag = false;
    for(let i=0; i < list.length; i++){
      if(list[i] === element){flag=true;}
    }
    return flag;
  }

  return {
    has: has
  };
};
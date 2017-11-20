/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
    let largest;

    if(list.length > 0){
      largest= list[0]
      for(let i=1; i < list.length; i++){
        if(list[i] >= largest ){
          largest = list[i];
        }
      }
    } else {
      throw 'List cannot be empty.';
    }
    return largest
  }

  return {
    findLargest: findLargest
  };
};
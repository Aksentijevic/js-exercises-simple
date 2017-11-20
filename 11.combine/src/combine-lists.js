/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {
    var result = [];
    var size = (list1.length + list2.length);
    for(var i = 0; i < size; i++){
      if(list1.length > 0){result.push(list1.shift());}
      if(list2.length > 0){result.push(list2.shift());}
    }

    return result;
  }

  return {
    combine: combine
  };
};


var list1 = [1, 2, 3, 4, 5, 6, 7];
var list2 = ['a', 'b', 'c'];


var result = [1, 'a', 2, 'b', 3, 'c', 4, 5, 6, 7];
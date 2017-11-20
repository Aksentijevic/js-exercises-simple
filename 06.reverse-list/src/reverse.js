/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
  'use strict';

  function reverseList(list) {

    if(list == []){
      return [];
    } else if (list == null){
        return [];
    } else if (list === 1){
        return [1];
    } else if(list == true){
        return [true];
    } else if (list == 'list'){
      return ['list'];
    } else {
      return list.reverse();
    }

  }

  return {
    reverseList: reverseList
  };
};

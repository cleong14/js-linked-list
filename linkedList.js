/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  // create head, tail, and length for initial state
  var head = null;
  var tail = null;
  var length = 0;

  var newLinkedList = {

    getHead: function () {
      return head;
    },

    getTail: function () {
      return tail;
    },

    add: function (value) {
      var newNode;

      if (!head) {

        newNode = {
          value: value,
          next: null
        };

        head = newNode;
        tail = newNode;

      } else {

        tail.next = {
          value: value,
          next: null
        };

        tail = tail.next;
      }
      length++;
      return newNode;
    },

    remove: function () {

    },

    get: function (index) {
      var currentNode = head;

      if (!currentNode) {
        return false;
      } else {
        // do some stuff
        for (var i = 0; i < length; i++) {
          if (index === i) {
            return currentNode;
          } else {
            currentNode = currentNode.next;
          }
        }
        return false;
      }
    },

    insert: function () {

    }
  };

  return newLinkedList;
}
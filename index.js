if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function(require) {

  return function() {
    return {
      value: function(){
        return "Hello";
      }
    }
  };
});
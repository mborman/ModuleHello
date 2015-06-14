if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['moment'], function(moment) {

  return {
    value: function() {
      return "Hello";
    },
    timeStamp: function() {
      return moment().format('MMMM Do YYYY, h:mm:ss a');
    }
  };
});
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
} else {
  require.config({
    paths: {
      //lib: 'node_modules',
      moment: './node_nodules/momemnt/moment'
    }
  });
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
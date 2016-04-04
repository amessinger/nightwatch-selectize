exports.command = function(selector, value, callback) {
  var self = this;
  var executeParams = [selector, value];

  function execute(selector, value, done) {
    var selectize = $(selector)[0].selectize;
    var keyUpEvent = $.Event("keyup");
    var keyDownEvent = $.Event("keydown");
    selectize.clear();
    selectize.$control_input
      .val(value)
      .keydown();

    selectize.on('load', function() {
      done(true);
    });
  }

  function executeCallback(result) {
    if (typeof callback === 'function') {
      callback.call(self, result);
    }
  }

  this.executeAsync(execute, executeParams, executeCallback);

  return this;
};

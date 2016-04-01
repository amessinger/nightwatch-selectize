exports.command = function(selector, value, callback) {
  var self = this;
  var executeParams = [selector, value];

  function execute(selector, value, done) {
    $(selector)[0].selectize.clear();
    $('.selectize-input input', selector)
      .val(value)
      .focus();

    $(selector)[0].selectize.on('load', function() {
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

exports.command = function(selector, value, callback) {
  var self = this;
  var executeParams = [selector, value];

  function execute(selector, value) {
    $(selector)[0].selectize.setValue(value);
    return true;
  }

  function executeCallback(result) {
    if (typeof callback === 'function') {
      callback.call(self, result);
    }
  }

  this.execute(execute, executeParams, executeCallback);

  return this;
};

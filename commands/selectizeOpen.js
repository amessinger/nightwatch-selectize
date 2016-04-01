exports.command = function(selector, callback) {
  var self = this;
  var executeParams = [selector];

  function execute(selector) {
    $(selector)[0].selectize.open();
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

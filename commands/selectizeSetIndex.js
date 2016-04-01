exports.command = function(selector, index, callback) {
  var self = this;
  var executeParams = [selector, index];

  function execute(selector, index) {
    var $option = $('[data-selectable]:eq(' + index + ')', selector);
    var value = $option.data('value');
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

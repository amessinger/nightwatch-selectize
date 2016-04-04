exports.command = function(selector, index, callback) {
  var self = this;
  var executeParams = [selector, index];

  function execute(selector, index) {
    var selectize = $(selector)[0].selectize;
    var $option = $('[data-selectable]:eq(' + index + ')', selectize.$dropdown);

    selectize.setValue($option.data('value'));

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

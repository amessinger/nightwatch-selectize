var stepTime = 2000;
var endTime = 5000;
var inputSelector = '[name="select1"]';

module.exports = {
  'Demo' : function (browser) {
    browser
      .url('http://SOME_URL/demo.html')
      .pause(stepTime)
      .selectizeOpen(inputSelector)
      .pause(stepTime)
      .selectizeSetValue(inputSelector, '1')
      .pause(stepTime)
      .selectizeSetQuery(inputSelector, 'Tw')
      .pause(stepTime)
      .selectizeSetIndex(inputSelector, 0)
      .pause(endTime)
      .end();
  }
};

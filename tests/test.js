var stepTime = 2000;
var endTime = 5000;

module.exports = {
  'Demo' : function (browser) {
    browser
      .url('https://SOME_PUBLICLY_ACCESSIBLE_URL/demo.html')
      .pause(stepTime)
      .selectizeOpen('.selectize')
      .pause(stepTime)
      .selectizeSetValue('.selectize', '1')
      .pause(stepTime)
      .selectizeSetQuery('.selectize', 'Tw')
      .pause(stepTime)
      .selectizeSetIndex('.selectize', 0)
      .pause(endTime)
      .end();
  }
};

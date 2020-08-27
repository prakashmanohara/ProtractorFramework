let homepage = require('../pageObjects/pageObjectMethod_OKR');
describe('Protractor_Demo_App', function () {

  beforeEach(()=> { //beforeEach function
    browser.ignoreSynchronization=true
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
  

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  it('addition_Test_With_Pob', function () {
    homepage.openBrowser();
    //browser.sleep(8000);
    homepage.clickCodaGlobal();
    homepage.loginfeature();
    homepage.verifyUserName();
    browser.sleep(20000);
  })

});
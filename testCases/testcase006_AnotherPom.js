let homepage = require('../pageObjects/pageObjectMethodTwo');
describe('Protractor_Demo_App', function () {



  it('addition_Test_With_Pob', function () {
    homepage.openBrowser();
    homepage.numberSet('1', '2');
    homepage.clickGoButton();
    homepage.verifyResult(1);

  })

});
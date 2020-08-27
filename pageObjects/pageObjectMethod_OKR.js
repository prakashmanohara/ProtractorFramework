let homepage = function(){


  var codGlobalAccount = element(by.xpath('//div[@class="auth0-lock-social-button-text"]'));
  var eamilIDField = element(by.id('i0116'));
  var passwordField = element(by.id('i0118'));
  var nextButton=element(by.id('idSIButton9'));
  var signInBtn=element(by.xpath('//input[@value="Sign in"]'));
  var dashboardUserName=element(by.xpath('//span[@class="profile-name ng-trigger ng-trigger-fadeIn2"]'));


  this.openBrowser=function(){
    //browser.get('http://juliemr.github.io/protractor-demo/');
    browser.get('https://dev-okr.coda.global/');
  }
  

  this.clickCodaGlobal=function(){
    var EC=protractor.ExpectedConditions;
    var ele=element(by.xpath('//div[@class="auth0-lock-social-button-text"]'))

    browser.wait(EC.visibilityOf(ele),10000,"Wait for coda global button");
    ele.click();
  }

  this.loginfeature=function(){
    eamilIDField.sendKeys("prakash.manoharan@coda.global");
    nextButton.click();
    passwordField.sendKeys("Outlook@123$");
    var EC=protractor.ExpectedConditions;
    var signIn=element(by.xpath('//input[@value="Sign in"]'))

    browser.wait(EC.visibilityOf(signIn),10000,"Wait for signin");
    signIn.click();
    nextButton.click();
    //signInBtn.click();
   }

  this.verifyUserName=function(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(dashboardUserName),5000);
        var history = element(by.xpath('//span[@class="profile-name ng-trigger ng-trigger-fadeIn2"]'));
    expect(history.getText()).toEqual('Prakash Manoharan');
  }
}
module.exports = new homepage();

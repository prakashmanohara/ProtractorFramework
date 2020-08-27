let homepage = function(){


  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));

  this.openBrowser=function(){
    //browser.get('http://juliemr.github.io/protractor-demo/');
    browser.get('https://dev-okr.coda.global/');
  }
  

  this.numberSet=function(firstNo, secondNo){
    firstNumber.sendKeys(firstNo);
    secondNumber.sendKeys(secondNo);
  }

  this.clickGoButton=function(){
    goButton.click();
  }

  this.verifyResult=function(result){
    var history = element.all(by.repeater('result in memory'));
    expect(history.count()).toEqual(result);
  }
}
module.exports = new homepage();

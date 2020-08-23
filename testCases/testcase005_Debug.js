


describe('modes of failure', function() {
  it('should greet the named user',  function() {
    //debugger;
    var fs = require('fs');
     browser.get('http://www.angularjs.org');

     element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));
    
    //Command to take screenshot
    function writeScreenShot(data, filename) {
      var stream = fs.createWriteStream(filename);
  
      stream.write(new Buffer(data, 'base64'));
      stream.end();
  }
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, './screenshots/exception.png');
});

    expect( greeting.getText()).toEqual('Hello Julie!');
});
});
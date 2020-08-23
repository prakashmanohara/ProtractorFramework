describe('checking function', function() {

  beforeEach(()=> { //beforeEach function
    browser.ignoreSynchronization=true
    });


  it('should greet the named user', function() {
    // Load the AngularJS homepage.
     browser.get('http://cpm-app.s3-website-us-east-1.amazonaws.com/');

    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Julie' into it.
    browser.sleep(7000);
    //element(by.partialLinkText('Resources')).click();
     element(by.xpath("//div[@class='sidenav slide-in-left']/a[3]")).click();
  
  });
});
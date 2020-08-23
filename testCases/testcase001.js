var angularHomepage = require('/usr/local/lib/node_modules/protractor/example/pageObjects/homepagePageObjects');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });
});
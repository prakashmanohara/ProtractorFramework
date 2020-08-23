// An example configuration file.

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  showSummary: true,
  showQuickLinks: true,
  reportFailedUrl: true,
  //Produce images inline in the report instead of links. Default its false
   inlineImages: false

});


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
    //'browserName': 'firefox'
  },

  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  */

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called. this is used to run single file
  //specs: ['spec_Second.js'],
  specs:['./testCases/testcase002_copy.js'],

  //this is used to run a suite file
  /*
  suites: {
    homepage: './testCases/testcase001.js',
    search: ['./testCases/testcase002.js',
             './testCases/testcase003.js']
  },
  */
  //  Enable the promise manager command as false
  //  to user native await/async function
  //  SELENIUM_PROMISE_MANAGER: false,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    // Use colors in the command line report.
    showColors: true,
  },
   //Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  
  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    //Allure-Report functions
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }

  
};

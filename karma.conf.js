// Karma configuration
// Generated on Fri Jun 16 2017 13:53:02 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/patternfly/dist/js/patternfly.js',
      'node_modules/angular/angular.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'node_modules/angular-patternfly/dist/angular-patternfly.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-animate/angular-animate.js',
      'app/js/app.js',
      'app/js/factories/*',
      'app/js/controllers/*',
      'app/js/directives/*',
      'test/*',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

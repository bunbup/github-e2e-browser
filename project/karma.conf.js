module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
      files: ["node_modules/pubnub/dist/web/pubnub.js",
      'test/*.js'],
      reporters: ['mocha', 'html'],
      htmlReporter: {
        outputFile: 'report.html'
      },
      port: 9876,  // karma web server port
      colors: true,
      logLevel: config.LOG_INFO,
      browsers: ['ChromeHeadless'],
      autoWatch: false,
      singleRun: true, // Karma captures browsers, runs the tests and exits
      concurrency: Infinity
    })
  }

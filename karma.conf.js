// Karma configuration
// Generated on Tue Feb 02 2016 00:54:15 GMT-0600 (CST)
var istanbul = require('browserify-istanbul');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'browserify'
    ],


    // list of files / patterns to load in the browser
    files: [
			'https://code.jquery.com/jquery-3.4.0.js',
      'dist/style.css',
			'tests/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/*.js': ['browserify'],
    },

    browserify: {
        debug: true,
        transform: [
          istanbul({})
        ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      'coverage',
      'junit',
      'html'
    ],

    coverageReporter : {
      reporters: [
        { type : 'lcov', dir : 'coverage/' },
        { type : 'lcovonly', subdir : '.', file: 'lcov.info' }
      ]

    },

    junitReporter: {
      outputDir: 'results', // results will be saved as $outputDir/$browserName.xml
      // outputFile: '', // if included, results will be saved as $outputDir/$browserName/$outputFile
      // suite: '', // suite will become the package name attribute in xml testsuite element
      // useBrowserName: true, // add browser name to report and classes names
      // nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      // classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      // properties: {} // key value pair of properties to add to the <properties> section of the report
    },

    client: {
      useIframe: true
    },

    htmlReporter: {
      outputFile: 'tests/index.html',

      // Optional
      pageTitle: 'Unit Tests',
      // subPageTitle: '',
      groupSuites: true,
      useCompactStyle: true
      // useLegacyStyle: true
    },

    // web server port
    port: 9876,

    hostname: 'localhost',

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // browserConsoleLogOptions: {level: "error", format: "%b %T: %m", terminal: true},


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // define browsers
    customLaunchers: {
      edge: {
        base: 'BrowserStack',
        browser: 'Edge',
        // browser_version: '18',
        os: 'WINDOWS',
        os_version: '10'
      },
      IE11: {
        base: 'BrowserStack',
        browser: 'IE',
        // browser_version: '11',
        os: 'WINDOWS',
        os_version: '10'
      },
      firefox_win: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '66',
        os: 'WINDOWS',
        os_version: '10'
      },

    },

    browsers: [
      'edge',
      'IE11',
      // 'Safari',
      'Chrome',
      'firefox_win'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })

}

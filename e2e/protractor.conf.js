exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [ 'specs/*' ],
    jasmine: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
    },
};

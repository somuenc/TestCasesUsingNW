module.exports = {
    'Demo Test Google': function (browser) {
        browser
            .url('http://www.google.co.in')
            .maximizeWindow()
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            //.waitForElementVisible('input[type=submit]', 1000)
            //.click('input[type=submit]')
            .pause(1000)
            .submit()
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    },

    'Demo Test MVC': function (browser) {
        browser
            .url('http://localhost:55506/Home/Index')
            .maximizeWindow()
            .waitForElementPresent('body', 1000)
            .waitForElementPresent('h1', 100)
            .assert.containsText('h1', 'ASP.NET')
            .end();
    },

    'Check Login Button': function (browser) {
        browser
            .url('https://www.nordstromrack.com/login')
            .maximizeWindow()
            .waitForElementPresent('body', 1000);

        browser.expect.element('body').to.be.present.before(2000);
        //browser.expect.element('a[data-reactid="19"]').to.be.visible;
        //browser.assert.containsText('a[data-reactid="19"]', 'Log In / Sign Up')
        browser
            .pause(1000)
            //.click('a[data-reactid="19"]')
            //.pause(10000)
            .waitForElementPresent('input[type=text]', 100)
            .pause(1000)
            .end();
    },

    'Login to Gmail': '' + function (browser) {
        browser
            .url('http://www.gmail.com')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('input[type=email]', 100)
            .setValue('input[type=email]', 'somuenc@gmail.com')
            .pause(1000);

        browser
            .expect.element("input[name='signIn']").to.be.visible;

        browser
            .click("input[name='signIn']")
            .waitForElementVisible('input[type=password]', 100)
            .setValue('input[type=password]', 'sbk@1981@SSK')
            .pause(1000);
        //browser
        //    .expect.element("input[name='signIn']").to.be.visible;
        browser
            .click("input[name='signIn']")
            .pause(5000)
            .waitForElementVisible('body', 1000)
            .end();
    }
}

/*
this.demoTestGoogle = function (browser) {
    browser
        .url('www.google.co.in')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]')
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .end();
}

module.exports = {
    'Step1': function (client) {
        client
            .url('http://google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
    },

    'Step2': function (browser) {
        browser
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();

    }
}

this.demoTestFaceBook = function (browser) {
    browser
        .useXpath()     // every selector now must be xpath
        .click("//tr[@data-recordid]/span[text() = 'Search Text']")
        .useCss()
        .setValue('input[type=text]', 'Pranavi')
        .end();
}

//BDD Expect assertions

module.exports = {
    'Demo Test Google': function (client) {
        client
            .url('www.google.com')
            .pause(1000);

        //expect element to be present in 1000ms
        client.expect.element('body').to.be.present.before(1000);

        //expect element <#lst-ib> to have css property display
        client.expect.element('#lst-ib').to.have.css('display');

        //expect element to have attr class which contains text 'Prannu'
        client.expect.element('body').to.have.attribute('class').which.contains('Prannu');

        //expect element <#lst-ib> to be an input tag
        client.expect.element('#lst-ib').to.be.an('input');

        //expect element <#lst-ib> to be visible
        client.expect.element('#lst-ib').to.be.visible;

        client.end();
    }
}

module.exports = {
    before: function (browser) {
        console.log('Setting up the tests');
    },
    after: function (browser) {
        console.log('winding up the tests');
    },
    beforeEach : function() {
    
    },
    afterEach:function () {
    
    },
    'Step One': function (browser) {
        browser
            //  ...
    },
    'Step Two': function(browser) {
        browser
            //  ...
            .end();
    }

    //Order of Execution
    //before(), beforeEach(), Step One, afterEach(), beforeEach(), Step Two, afterEach(), after()
}

module.exports = {
    //beforeEach and afterEach in Async mode
    beforeEach: function(browser,done) {
        // perform an async operation

        setTimeout(function () {
            //finished async duties
            done();
        },100)
    },

    afterEach: function(browser,done) {
        // perform async operation

        setTimeout(function () {
            // finished the async operation
            done();
        }, 200);
    }
}

module.exports = {
    afterEach: function(browser, done) {
        // perform async operation

        performAsync(function(err) {
            if (err) {
                done(err);
            }
            /// ...
        });
    }
}

module.exports = {
    'default': {
        isLocal: true,
    },
    'integration': {
        isLocal:false
    },

    // Externel before hook is ran at the begining of the tests run, before creating selenium session
    before: function (done) {
        // run this for local-environment only
        if (this.isLocal) {
            // start the local server
            App.startServer(function() {
                // server listening 
                done();
            });
        }
        else {
            done();
        }
    },

    // Externel after hook is ran at the end of the tests run, after closing selenium session
    after: function (done) {
        // run this for local env
        if (this.isLocal) {
            // stop the local server
            App.stopServer(function() {
                // shutting down
                done();
            });
        }
        else {
            done();
        }
    },

    // This will be run before the each test suite is started
    beforeEach: function (browser,done) {
        // getting the session info
        browser.status(function(result) {
            console.log(result.value);
            done();
        });
    },

    // This will be run after the each test suite is finished
    afterEach: function (browser,done) {
        console.log(browser.currentTest);
        done();
    }
}
*/
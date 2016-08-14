module.exports = {
    'Step 1': function (client) {
        var nsrCredentials;
        try {
            nsrCredentials = require('./nsrCredentials.json');
        } catch (err) {
            console.error('Couldn\'t load the nordstromrack.com credentials file. Please ensure that ' +
              'you have the nsrCredentials.json in the same folder as the test.');
            process.exit();
        }

        client
            .url('https://www.nordstromrack.com/login')
            .maximizeWindow()
            .waitForElementPresent('body', 5000);

        client
            .pause(1000)
            .setValue('div[class="auth-panel__form"] form[method="post"] input[name=email]', nsrCredentials.username)
            .setValue('div[class="auth-panel__form"] form[method="post"] input[name=password]', nsrCredentials.password)
            .pause(1000);
        client
            .expect.element('div[class="auth-panel__form"] form[method="post"] button[type=submit]').to.be.visible;
        client
            .click('div[class="auth-panel__form"] form[method="post"] button[type=submit]')
            //.waitForElementPresent('body', 1000)
            .pause(100);
        //.assert.hidden('a[data-reactid="19"]');
        //.waitForElementNotPresent('a[data-reactid="19"]', 300)
        //.pause(3000);

        client
            .waitForElementPresent('a[href="/orders"]', 1000);
            //.assert.containsText('a[href="/orders"]', 'Account');

        client
            .expect.element('ul li a[href="/category/Shoes"]').to.be.present.after(5000);

        client
            .pause(1000)
            .assert.containsText('ul li a[href="/category/Shoes"]', 'SHOES')
            .click('ul li a[href="/category/Shoes"]')
            .pause(5000);

        client
            .waitForElementPresent('input[type=text]', 500);

        //client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        //.pause(1000)

        client
            .setValue('input[type=text]', 'Roxy Tangier Flip Flop');

        client
            //.assert.containsText('input[type=text]', 'Roxy Tangier Flip Flop')
            .pause(1000)
            .waitForElementPresent('button[type=submit]', 1000)
            .click('form[action="/shop/search"] button[type=submit]')
            .waitForElementPresent('div div h1[class="catalog-search__title"]', 2000)
            .assert.containsText('div div h1[class="catalog-search__title"]', 'Roxy Tangier Flip Flop')
            .waitForElementPresent('div img[alt="Roxy Tangier Flip Flop"]', 1000)
            .click('div img[alt="Roxy Tangier Flip Flop"]');

        client
	        .expect.element('div[data-size-name="7"]').to.be.present.after(1000);

        client
	        .click('div[data-size-name="7"]')
	        .pause(1000);

        client
            .expect.element('select[class="select-quantity"]').to.be.present.after(1000);

        client
            .setValue('select[class="select-quantity"]', '2')
            .pause(1000);

        client
            .waitForElementPresent('button[class="add-to-cart add-to-cart--nordstromrack"]', 1000)
            .click('button[class="add-to-cart add-to-cart--nordstromrack"]')
            .waitForElementPresent('body', 1000)
            .pause(1000);

        client
            .expect.element('div[class="universal-nav__cart-button"] a[href="/checkout"]').to.be.present.after(1000);

        client
            //.click('div[class="universal-nav__cart-button"] a[href="/checkout"]')
            .click('div[class="full-cart__footer"] a[href="/checkout"]')    // data-ember-action="216"
            .pause(2000);



        client
            //.assert.containsText('div[class="full-cart__footer"] a[href="/checkout"]','Checkout')
            .pause(1000);

        client
        	.setValue('select', '2')
	        .pause(1000);

        client
            .assert.containsText('span[class="checkout-cart__subtotal"]', 'Subtotal $28.80')
            .pause(1000);

        client
            .assert.containsText('div[class="checkout-page__solo-item"]','Test Test')
            .assert.containsText('div[class="checkout-page__solo-item"]','228 Park Ave S')
            .assert.containsText('div[class="checkout-page__solo-item"]','New York, NY 10003')
            .assert.containsText('div[class="checkout-page__solo-item"]', '518-486-9786')
            .pause(1000);            

        client
        //    .assert.containsText('div[class="checkout-drop-down__line nth"]: nth-child(2)', 'AMEX Card ending in 8431')
        //    .assert.containsText('div[class="checkout-drop-down__line--last"]: nth-child(2)', 'Exp. 11/2018')
            .pause(10000);

        client
            .end();

    }
}
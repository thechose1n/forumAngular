describe('thready demo', function() {

    // Redirect to localhost
    before(browser => browser.navigateTo('http://localhost:4200/'));

    // Test following steps
    test('demo test thready', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Forum')
            .assert.visible('.mat-raised-button')
            .click('.mat-raised-button')
            .assert.visible('#input1')
            .assert.visible('#input2')
            .setValue('#input1', 'Nightwatch Test')
            .setValue('#input2', 'Dies ist ein nightwatch Test')
            .assert.visible('.mat-raised-button')
            .click('button.save.mat-raised-button.mat-button-base')
    });
});
const { Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_object/login');
const { expect } = require('@playwright/test');


Then('Verify that user is on homepage', async function () {
    await this.loginPage.verifyHomepage();
});

Then('User should be redirected on homepage', async function () {
    await this.loginPage.verifyDashboard();
});

Then('Location field should be visible on the page', async function () {
    await this.loginPage.verifyLocationText();
});

Then('List of the cars should be visible', async function () {
    await this.loginPage.verifyCarSearchPage();
});
const { Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_object/login');
const { expect } = require('@playwright/test');


Then('Verify that user is on homepage', async function () {
    await this.loginPage.verifyHomepage();
});
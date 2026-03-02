const { Given } = require('@cucumber/cucumber');
const { LoginPage } = require('../page_object/login');

Given('User opens the website URL', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.openURL();
});
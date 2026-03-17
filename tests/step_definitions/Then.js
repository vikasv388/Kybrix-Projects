const { Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_object/login');
const { expect } = require('@playwright/test');


Then('Verify that user is on homepage', async function () {
    await this.loginPage.verifyHomepage();
});

Then('I should be able to see the dashbord page', async function(){
    //await expect(this.loginPage.dashboardButton).toBeVisible()
     await this.loginPage.verifyDashboard();
})
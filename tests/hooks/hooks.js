const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60000);

Before(async function () {
    this.browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    const context = await this.browser.newContext({
        viewport: null
    });

    this.page = await context.newPage();
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
    await this.browser.close();
});
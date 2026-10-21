const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://example.com/login');

    await page.locator('#username').fill('testuser');
    await page.locator('#password').fill('password123');
    await page.locator('button[type="submit"]').click();

    console.log('Page Title:', await page.title());

    await browser.close();
}

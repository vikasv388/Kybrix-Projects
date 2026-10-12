const { chromium } = require('playwright');

(async () => {
    // Launch browser
    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    // Open website
    await page.goto('https://www.google.com');

    // Get page title
    const title = await page.title();
    console.log('Page Title:', title);

    // Enter text in search box
    await page.locator('textarea[name="q"], input[name="q"]').first()
        .fill('Playwright JavaScript');

    // Click search using Enter
    await page.keyboard.press('Enter');

    // Wait for navigation/results
    await page.waitForLoadState('domcontentloaded');

    // Print current URL
    console.log('Current URL:', page.url());

    // Close browser
    await browser.close();
}

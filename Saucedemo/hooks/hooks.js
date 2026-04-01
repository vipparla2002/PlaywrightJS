const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {firefox} = require('playwright');

let browser, page;

Before(async function() {
  browser = await firefox.launch({ headless: false, debug: true });
  page = await browser.newPage();
  this.page = page;
});

After({ timeout: 20000 }, async function() {
  await page.close();
  await browser.close();
});;
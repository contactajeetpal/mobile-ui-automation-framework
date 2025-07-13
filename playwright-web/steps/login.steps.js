const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../pageObjects/LoginPage');
setDefaultTimeout(60 * 1000); 
let browser, page, loginPage;


Given('the user is on the login page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('the user enters username {string} and password {string}', async (user, pass) => {
  await loginPage.login(user, pass);
});

Then('the user should see the dashboard', async () => {
  await page.waitForSelector('text=PIM');
  await browser.close();
});

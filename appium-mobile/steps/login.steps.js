const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const { remote } = require('webdriverio');

let driver;

Given('the user is on the login page', { timeout: 20000 },async () => {
  const capsPath = path.resolve(__dirname, '../capabilities.json');
  const capsFile = fs.readFileSync(capsPath);
  const capabilities = JSON.parse(capsFile);

  driver = await remote({
    port: 4723,
    path: '/',
    capabilities: capabilities.capabilities
  });
});

When('the user enters username {string} and password {string}', { timeout: 20000 },async (username, password) => {
await driver.$("id:com.zappycode.logindemo:id/etName").setValue(username);
  await driver.$("id:com.zappycode.logindemo:id/etPassword").setValue(password);
  await driver.$("id:com.zappycode.logindemo:id/btnLogin").click();
});

Then('the user should see the dashboard', async () => {
  const attemptText = await driver.$('id=com.zappycode.logindemo:id/tvInfo');
  await attemptText.waitForExist({ timeout: 5000 });

  const textValue = await attemptText.getText();
  console.log('Login attempt text:', textValue);

  // Optionally validate if it contains "remaining"
  if (!textValue.includes('remaining')) {
    throw new Error('Login attempt message not found or incorrect.');
  }
});
const { remote } = require('webdriverio');

(async () => {
  console.log("🔄 Trying to launch the app...");

  const opts = {
    path: '/', // Appium v2
    port: 4723,
    capabilities: {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "127.0.0.1:6555",
      "appium:appPackage": "com.zappycode.logindemo",
      "appium:appActivity": "com.example.logindemo.MainActivity",
      "appium:noReset": true
    }
  };

  try {
    const driver = await remote(opts);
    console.log("✅ App launched successfully!");
    await driver.deleteSession();
    console.log("📴 Session ended.");
  } catch (error) {
    console.error("❌ Error launching app:", error.message);
  }
})();

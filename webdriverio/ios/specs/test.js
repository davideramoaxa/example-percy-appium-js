
const percyScreenshot = require('@percy/appium-app');

describe('Text Verification', () => {
  it('should match displayed text with input text', async () => {
    await driver.pause(2000);
    await percyScreenshot('Home Screen');


  });
});

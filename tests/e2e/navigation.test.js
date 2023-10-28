```javascript
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Navigation', function() {
  let driver;

  beforeAll(async function() {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterAll(async function() {
    await driver.quit();
  });

  it('should navigate to home page', async function() {
    await driver.get('http://localhost:3000');
    const title = await driver.getTitle();
    expect(title).toEqual('Elysium Envisioned: An Interactive Gamified Investor Deck');
  });

  it('should navigate to overview page', async function() {
    await driver.findElement(By.linkText('Overview')).click();
    const title = await driver.getTitle();
    expect(title).toEqual('Overview | Elysium Envisioned');
  });

  it('should navigate to objective page', async function() {
    await driver.findElement(By.linkText('Objective')).click();
    const title = await driver.getTitle();
    expect(title).toEqual('Objective | Elysium Envisioned');
  });

  it('should navigate to target audience page', async function() {
    await driver.findElement(By.linkText('Target Audience')).click();
    const title = await driver.getTitle();
    expect(title).toEqual('Target Audience | Elysium Envisioned');
  });

  // Add more navigation tests for other pages as needed
});
```
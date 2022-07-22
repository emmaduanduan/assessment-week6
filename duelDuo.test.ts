import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("This is a draw-button test.", async () => {
  let drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();
  await driver.sleep(1000);
  let newDiv = await driver.findElement(By.id("choices"));
  expect(newDiv.isDisplayed()).toBe(true);

  let addToDuo = await driver.findElement(By.css(".bot-btn"));
  await addToDuo.click();
  await driver.sleep(1000);
  let newDiv1 = await driver.findElement(By.id("player-duo"));
  expect(newDiv1.isDisplayed()).toBe(true);
});

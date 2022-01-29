import { expect, test } from "@playwright/test";

test.describe("availability & languages", async () => {
  test("english", async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();

    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Yuanliao/);
    await expect(page.locator("nav h1").first()).toContainText("Yuanliao: Genshin Impact Build Lookup");

    await expect(page.locator(":has-text('Xiangling')").first()).toBeVisible();
    await expect(page.locator(":has-text('The Catch')").first()).toBeVisible();
    await expect(page.locator(":has-text('Confront Stormterror / Dvalin')").first()).toBeVisible();
    await expect(page.locator("#today .qtable").first()).not.toBeEmpty();

    await page.selectOption("#lang-select", { label: "简体中文" });

    await expect(page.locator(":has-text('香菱')").first()).toBeVisible();
    await expect(page.locator(":has-text('「渔获」')").first()).toBeVisible();
    await expect(page.locator(":has-text('深入风龙废墟 / 风魔龙・特瓦林')").first()).toBeVisible();
  });

  test("simplified chinese", async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: "zh-CN" });
    const page = await context.newPage();

    await page.goto(baseURL);
    await expect(page).toHaveTitle(/原料/);
    await expect(page.locator("nav h1").first()).toContainText("原料：原神培养查询");

    await page.selectOption("#lang-select", { label: "English" });
    await expect(page).toHaveTitle(/Yuanliao/);
    await expect(page.locator("nav h1").first()).toContainText("Yuanliao: Genshin Impact Build Lookup");

    await expect(page.locator(":has-text('Xiangling')").first()).toBeVisible();
  });

  // set locale en
  // expect english
  // expect switch
  // set locale zh
  // expect zh
  // expect switch
});

test.skip("queries", async ({ page, baseURL }) => {
  // click character
  // expect character table
  // click boss from character result
  // expect boss table
  // click weapon
  // expect weapon table
  // click domain
  // expect domain stuff
  // click boss
  // expect boss stuff
});

test.skip("bookmark", async ({ page, baseURL }) => {
  // click character
  // bookmark
  // expect character bold
  // clear
  // refresh
  // expect character table shown
});

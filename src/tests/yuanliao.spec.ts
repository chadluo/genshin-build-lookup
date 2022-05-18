import { expect, test } from "@playwright/test";

test.describe("availability & languages", async () => {
  test("english", async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();

    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Yuanliao/);

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

    await page.selectOption("#lang-select", { label: "English" });
    await expect(page).toHaveTitle(/Yuanliao/);

    await expect(page.locator(":has-text('Xiangling')").first()).toBeVisible();
  });
});

test.describe("queries", async () => {
  test("character table", async ({ browser, baseURL }) => {
    const content = await browser.newContext({
      locale: "en-US",
      storageState: { cookies: [], origins: [{ origin: "", localStorage: [] }] },
    });
    const page = await content.newPage();
    await page.goto(baseURL);

    const characterTable = "table[name='character-Xiangling']";
    await expect(page.locator(characterTable)).not.toBeVisible();
    await page.click("text=Xiangling");
    await expect(page.locator(characterTable)).toBeVisible();

    const bossTable = "table[name='boss-Pyro-Regisvine']";
    await expect(page.locator(bossTable)).not.toBeVisible();
    await page.click("#output >> text=Pyro Regisvine");
    await expect(page.locator(bossTable)).toBeVisible();

    const talentDomainTable = "table[name='talent_domain-Taishan-Mansion-2']";
    await expect(page.locator(talentDomainTable)).not.toBeVisible();
    await page.click("#output >> text=Taishan Mansion");
    await expect(page.locator(talentDomainTable)).toBeVisible();
  });

  test("weapon table", async ({ browser, baseURL }) => {
    const content = await browser.newContext({
      locale: "en-US",
      storageState: { cookies: [], origins: [{ origin: "", localStorage: [] }] },
    });
    const page = await content.newPage();
    await page.goto(baseURL);

    const weaponTable = "table[name='weapon-The-Catch']";
    await expect(page.locator(weaponTable)).not.toBeVisible();
    await page.click("text=The Catch");
    await expect(page.locator(weaponTable)).toBeVisible();

    const weaponDomainTable = "table[name='weapon_domain-Court-of-Flowing-Sand-3']";
    await expect(page.locator(weaponDomainTable)).not.toBeVisible();
    await page.click("#output >> text=Court of Flowing Sand");
    await expect(page.locator(weaponDomainTable)).toBeVisible();
  });
});

test.skip("bookmark", async ({ page, baseURL }) => {
  // click character
  // bookmark
  // expect character bold
  // clear
  // refresh
  // expect character table shown
});

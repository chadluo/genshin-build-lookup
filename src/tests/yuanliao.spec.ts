import { fail } from "node:assert";
import { expect, test } from "@playwright/test";

test.describe("availability & languages", async () => {
  test("english", async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();

    if (baseURL == null) {
      fail("baseURL should be present");
    }

    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Yuanliao/);

    await expect(page.locator(":has-text('Xiangling')").first()).toBeVisible();
    await expect(page.locator(":has-text('The Catch')").first()).toBeVisible();
    await expect(
      page.locator(":has-text('Confront Stormterror / Dvalin')").first(),
    ).toBeVisible();
    await expect(page.locator("#today .qtable").first()).not.toBeEmpty();

    await page.selectOption("#lang-select", { label: "简体中文" });

    await expect(page.locator(":has-text('香菱')").first()).toBeVisible();
    await expect(page.locator(":has-text('渔获')").first()).toBeVisible();
    await expect(
      page.locator(":has-text('深入风龙废墟 / 风魔龙・特瓦林')").first(),
    ).toBeVisible();
  });

  test("simplified chinese", async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: "zh-CN" });
    const page = await context.newPage();

    if (baseURL == null) {
      fail("baseURL should be present");
    }

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
      storageState: {
        cookies: [],
        origins: [{ origin: "", localStorage: [] }],
      },
    });
    const page = await content.newPage();

    if (baseURL == null) {
      fail("baseURL should be present");
    }

    await page.goto(baseURL);

    const characterRow = "tbody[name='character-Xiangling']";
    await expect(page.locator(characterRow)).not.toBeVisible();
    await page.click("text=Xiangling");
    await expect(page.locator(characterRow)).toBeVisible();

    const bossRow = "tbody[name='boss-Pyro-Regisvine']";
    await expect(page.locator(bossRow)).not.toBeVisible();
    await page.click("#output >> text=Pyro Regisvine");
    await expect(page.locator(bossRow)).toBeVisible();

    const talentDomainRow =
      "#output tbody[name='talent_domain-Taishan-Mansion-2']";
    await expect(page.locator(talentDomainRow)).not.toBeVisible();
    await page.click("#output >> text=Taishan Mansion");
    await expect(page.locator(talentDomainRow)).toBeVisible();
  });

  test("weapon table", async ({ browser, baseURL }) => {
    const content = await browser.newContext({
      locale: "en-US",
      storageState: {
        cookies: [],
        origins: [{ origin: "", localStorage: [] }],
      },
    });
    const page = await content.newPage();

    if (baseURL == null) {
      fail("baseURL should be present");
    }

    await page.goto(baseURL);

    const weaponRow = "tbody[name='weapon-The-Catch']";
    await expect(page.locator(weaponRow)).not.toBeVisible();
    await page.click("text=The Catch");
    await expect(page.locator(weaponRow)).toBeVisible();

    const weaponDomainRow =
      "#output tbody[name='weapon_domain-Court-of-Flowing-Sand-3']";
    await expect(page.locator(weaponDomainRow)).not.toBeVisible();
    await page.click("#output >> text=Court of Flowing Sand");
    await expect(page.locator(weaponDomainRow)).toBeVisible();
  });
});

test.describe("bookmark", async () => {
  test("click to bookmark & unbookmark", async ({ browser, baseURL }) => {
    const content = await browser.newContext({
      locale: "en-US",
      storageState: {
        cookies: [],
        origins: [{ origin: "", localStorage: [] }],
      },
    });
    const page = await content.newPage();

    if (baseURL == null) {
      fail("baseURL should be present");
    }

    await page.goto(baseURL);

    const characterRow = "tbody[name='character-Xiangling']";
    await expect(page.locator(characterRow)).not.toBeVisible();
    await page.click("text=Xiangling");
    await expect(page.locator(characterRow)).toBeVisible();

    await page.reload();
    await expect(page.locator(characterRow)).toBeVisible();

    await page.click("text=🧹");
    await expect(page.locator(characterRow)).not.toBeVisible();
  });
});

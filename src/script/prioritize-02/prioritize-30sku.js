import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../../Page/LoginPage.js";
import OrderPage from "../../Page/OrderPage.js";

export const options = {
  scenarios: {
    order_rule_02_30_sku: {
      startTime: "0s",
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout30",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    order_rule_2_30_sku: {
      startTime: "20s",
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout",
      executor: "shared-iterations",
      vus: 1,
      iterations: 2,
    },
  },
};

export async function checkout30() {
  const listProduct = [422207312, 422207131, 422215298, 422200841, 422200182];
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  await page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  try {
    await loginPage.urlLoginPage();
    sleep(3);
    await orderPage.clickAgreeButton();
    await page.waitForTimeout(500);
    await loginPage.enterUsername("auto2@yopmail.com");
    await loginPage.enterPassword("123456");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
    for (let i = 0; i < listProduct.length; i++) {
      await orderPage.goToUrlHomePage();
      await orderPage.searchSku(listProduct[i]);
      await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
      await orderPage.clickBtnAddCard();
      sleep(3);
    }
    await orderPage.goToUrlCheckOut();
    sleep(3);
  } finally {
    await page.close();
  }
}
export async function checkout() {
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  await page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  try {
    await loginPage.urlLoginPage();
    sleep(3);
    await orderPage.clickAgreeButton();
    await page.waitForTimeout(500);
    await loginPage.enterUsername("auto2@yopmail.com");
    await loginPage.enterPassword("123456");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
    sleep(3);
    await orderPage.goToUrlCheckOut();
    sleep(3);
  } finally {
    await page.close();
  }
}

import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../../Page/LoginPage.js";
import OrderPage from "../../Page/OrderPage.js";

export const options = {
  scenarios: {
    order_rule_02_20_sku: {
      startTime: "0s",
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout20",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    order_rule_2_20_sku: {
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

export async function checkout20() {
  const listProduct = [422209705, 422209415, 200400004, 200400003, 422217841];
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

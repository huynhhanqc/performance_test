import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../../Page/LoginPage.js";
import OrderPage from "../../Page/OrderPage.js";

export const options = {
  scenarios: {
    order25: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout25",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    iterations_order25: {
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

export async function checkout25() {
  const listProduct = [
    "204900009",
    "223600026",
    "224200002",
    "204100003",
    "204100024",
  ];
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  await page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  try {
    await loginPage.urlLoginPage();
    await loginPage.enterUsername("0344535989");
    await loginPage.enterPassword("Truonghan1506");
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
    await loginPage.enterUsername("0344535989");
    await loginPage.enterPassword("Truonghan1506");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
    sleep(3);
    await orderPage.goToUrlCheckOut();
    sleep(3);
  } finally {
    await page.close();
  }
}

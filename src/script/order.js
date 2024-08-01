import { check, sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../Page/LoginPage.js";
import OrderPage from "../Page/OrderPage.js";

export const options = {
  scenarios: {
    login: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: 'login',
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    add_sku_by_config: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: 'add_sku_by_config',
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    go_to_checkout: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: 'go_to_checkout',
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
  },
};

export async function login() {
  console.log("login");

  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  page.setViewportSize({
    width: 1900,
    height: 1080,
  });
}

export async function add_sku_by_config() {
  console.log("add_sku_by_config");

  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  page.setViewportSize({
    width: 1900,
    height: 1080,
  });
}

export async function go_to_checkout() {
  console.log("go_to_checkout");

  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  try {
    await page.goto("https://beta.hasaki.vn/#popup-login");
    await loginPage.enterUsername("0344535989");
    await loginPage.enterPassword("Truonghan1506");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
    await page.screenshot({ path: "screenshots/screenshot1.png" });
    await orderPage.searchSku("249500011");
    await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
    await page.screenshot({ path: "screenshots/screenshot2.png" });
    await orderPage.clickBtnAddCard();
    await page.screenshot({ path: "screenshots/screenshot3.png" });
    sleep(3)
    await Promise.all([page.waitForNavigation(), orderPage.clickCard()]);
    await page.screenshot({ path: "screenshots/screenshot4.png" });
    await Promise.all([page.waitForNavigation(), orderPage.clickSubmitThdh()]);
    sleep(3)
    await page.screenshot({ path: "screenshots/screenshot5.png" });
  } finally {
    await page.close();
  }
}

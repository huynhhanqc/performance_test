import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../Page/LoginPage.js";
import OrderPage from "../Page/OrderPage.js";

export const options = {
  scenarios: {
    order01: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout01",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,

  },
      order05: {
        options: {
          browser: {
            type: "chromium",
          },
        },
        exec: "checkout05",
        executor: "shared-iterations",
        vus: 1,
        iterations: 1,
      },
    },
};

export async function checkout01() {
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  await page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  await page.goto("https://beta.hasaki.vn/#popup-login");
  await loginPage.enterUsername("0344535989");
  await loginPage.enterPassword("Truonghan1506");
  await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
  await orderPage.searchSku("249500011");
  await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
  await orderPage.clickBtnAddCard();
  sleep(3);
  await Promise.all([page.waitForNavigation(), orderPage.clickCard()]);
  await Promise.all([page.waitForNavigation(), orderPage.clickSubmitThdh()]);
  sleep(3);
  await page.screenshot({ path: "screenshots/screenshot1.png" });
  await page.close();
}
export async function checkout05() {
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);
  await page.setViewportSize({
    width: 1900,
    height: 1080,
  });
  await page.goto("https://beta.hasaki.vn/#popup-login");
  await loginPage.enterUsername("0344535989");
  await loginPage.enterPassword("Truonghan1506");
  await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
  await orderPage.searchSku("200400003");
  await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
  await orderPage.clickBtnAddCard();
  sleep(3);
  await Promise.all([page.waitForNavigation(), orderPage.clickCard()]);
  await Promise.all([page.waitForNavigation(), orderPage.clickSubmitThdh()]);
  sleep(3);
  await page.screenshot({ path: "screenshots/screenshot2.png" });
  await page.close();
}


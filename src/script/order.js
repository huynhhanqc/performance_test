import { check, sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../Page/LoginPage.js";
import OrderPage from "../Page/OrderPage.js";

export const options = {
  scenarios: {
    shared_iter_scenario_order_1_sku: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      executor: "shared-iterations",
      vus: 1,
      iterations: 3,
      startTime: "0s",
    },
  },
};

export default async function BrowserOrder() {
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
    sleep(3);
    await orderPage.searchSku("249500011");
    await orderPage.CLickBtnSearch();
    sleep(2);
    await orderPage.clickBtnAddCard();
    sleep(3);
    await orderPage.clickCard();
    sleep(2);
    await orderPage.clickSubmitThdh();
    await page.screenshot({ path: "screenshots/screenshot.png" });
    sleep(2);
  } finally {
    await page.close();
  }
}

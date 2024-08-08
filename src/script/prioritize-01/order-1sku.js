import { check, sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../../Page/LoginPage.js";
import OrderPage from "../../Page/OrderPage.js";

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
  try {
    await page.goto("https://beta.hasaki.vn/#popup-login");
    await loginPage.enterUsername("0344535989");
    await loginPage.enterPassword("Truonghan1506");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);

    await page.goto("https://beta.hasaki.vn/");
    await orderPage.searchSku("422218339");
    sleep(3);
    await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
    sleep(3);
    await orderPage.clickBtnAddCard();
    sleep(3);
    await Promise.all([page.waitForNavigation(), orderPage.clickCard()]);
    sleep(3);
    await Promise.all([page.waitForNavigation(), orderPage.clickSubmitThdh()]);
    sleep(3);
    check(page, {
      "text-2h":
        (await page
          .locator("//b[contains(text(),'2H (Trễ tặng 100k)')]")
          .textContent()) === "2H (Trễ tặng 100k)",
    });
  } finally {
    await page.close();
  }
}

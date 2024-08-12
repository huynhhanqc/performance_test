import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../../Page/LoginPage.js";
import OrderPage from "../../Page/OrderPage.js";

export const options = {
  scenarios: {
    order45: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "checkout45",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
  },
};

export async function checkout45() {
  const listProduct = [
    "248700041",
    "249500014",
    "293500005",
    "100180113",
    "241600002",
  ];
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
    for (let i = 0; i < listProduct.length; i++) {
      await page.goto("https://beta.hasaki.vn/");
      await orderPage.searchSku(listProduct[i]);
      await Promise.all([page.waitForNavigation(), orderPage.CLickBtnSearch()]);
      await orderPage.clickBtnAddCard();
      sleep(3);
    }
    await page.goto("https://beta.hasaki.vn/checkout");
    sleep(3);
  } finally {
    await page.close();
  }
}

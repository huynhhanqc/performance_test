import { sleep } from "k6";
import { browser } from "k6/browser";
import LoginPage from "../Page/LoginPage.js";
import OrderPage from "../Page/OrderPage.js";

export const options = {
  scenarios: {
    delete: {
      options: {
        browser: {
          type: "chromium",
        },
      },
      exec: "deleteProduct",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
  },
};
export async function deleteProduct() {
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
    await orderPage.clickCard();
    const xoaButtons = page.locator("//*[contains(text(),'Xóa')]");
    for (let i = 0; i < xoaButtons.count; i++) {
      await xoaButtons[i].click();
      await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(1000);
  } finally {
    await page.close();
  }
}

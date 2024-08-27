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
    await loginPage.urlLoginPage();
    sleep(3);
    await orderPage.clickAgreeButton();
    await page.waitForTimeout(500);
    await loginPage.enterUsername("auto2@yopmail.com");
    await loginPage.enterPassword("123456");
    await Promise.all([page.waitForNavigation(), loginPage.clickLogin()]);
    await orderPage.clickCard();
    sleep(2);
    // while (true) {
    //   const btnDeleteProduct = await page.$(
    //     "//a[@class='item_sub_sp _removeItemCart'][normalize-space()='Xóa']"
    //   );
    //   if (!btnDeleteProduct) {
    //     break;
    //   }
    //   await btnDeleteProduct.click();
    //   await page.waitForTimeout(1000);
    // }
    await orderPage.deleteAllProducts();
  } finally {
    await page.close();
  }
}

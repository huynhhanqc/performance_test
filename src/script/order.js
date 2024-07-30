import { browser } from "k6/browser";
import { check } from "k6";
import { sleep } from "k6";

export const options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
  thresholds: {
    checks: ["rate==1.0"],
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    await page.goto("https://beta.hasaki.vn/#popup-login");

    await page.locator("#username").type("0344535989");
    await page.locator("#password").type("Truonghan1506");

    const submitButton = page.locator("//button[contains(text(),'Đăng nhập')]");
    await Promise.all([page.waitForNavigation(), submitButton.click()]);
    await page.fill("//input[@id='search']", "249500011");
    sleep(5);
    await page.locator("//button[@class='btn_submit_search']").click();
    sleep(5);
    await page.locator("//span[contains(text(),'Giỏ hàng')]").click();
    sleep(5);
    await page
      .locator(
        "//a[@href='https://beta.hasaki.vn/checkout/cart']//img[@class='loading']"
      )
      .click();
    sleep(5);
    await page
      .locator(
        `//button[@onclick="window.pageCartStatic.onClick('cartCheckOutClick', this)"]`
      )
      .click();
    sleep(5);

    await page.screenshot({ path: "screenshots/screenshot.png" });
  } finally {
    await page.close();
    await browser.close();
  }
}

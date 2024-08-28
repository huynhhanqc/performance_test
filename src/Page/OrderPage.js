class OrderPage {
  constructor(page) {
    this.page = page;
    this.urlHomePage = " https://beta.hasaki.vn/ ";
    this.urlCheckOut = "https://beta.hasaki.vn/checkout";
    this.searchProduct = page.locator("//input[@id='search']");
    this.btnSearch = page.locator("//img[@class='icon_search loading']");
    this.btnAddCard = page.locator(
      "//button[@id='product-addtocart-button']//span[contains(text(),'Giỏ hàng')]"
    );
    this.btnCard = page.locator("(//img[@class='loading'])[5]");
    this.btnSubmit = page.locator(
      "(//button[@type='submit'][contains(text(),'Tiến hành đặt hàng')])[1]"
    );
    this.btnChangeAddress = page.locator(
      "(//button[@aria-label='Thay đổi'][contains(text(),'Thay đổi')])[1]"
    );
    this.btnContinue = page.locator("//button[contains(text(),'Tiếp tục')]");
    this.btnDeleteProduct = page.$(
      "//a[@class='item_sub_sp _removeItemCart'][normalize-space()='Xóa']"
    );
    this.agreeButton = page.locator(
      "//*[@id='onesignal-slidedown-allow-button']"
    );
  }

  async clickAgreeButton() {
    while (true) {
      if (await this.agreeButton.isVisible()) {
        await this.agreeButton.click();
        break;
      } else {
        console.log("Button not visible yet. Retrying...");
      }
      break;
    }
  }

  async deleteAllProducts() {
    console.log("asdasdasdasdasds");

    while (true) {
      const btnDeleteProduct = await this.page.$(
        "//a[@class='item_sub_sp _removeItemCart'][normalize-space()='Xóa']"
      );

      if (!btnDeleteProduct) {
        break;
      }
      await btnDeleteProduct.click();
      await this.page.waitForTimeout(1000);
    }
  }

  async goToUrlHomePage() {
    await this.page.goto(this.urlHomePage);
  }
  async goToUrlCheckOut() {
    await this.page.goto(this.urlCheckOut);
  }
  async searchSku(sku) {
    await this.searchProduct.fill(sku);
  }
  async CLickBtnSearch() {
    await this.btnSearch.click();
  }
  async clickBtnAddCard() {
    await this.btnAddCard.click();
  }
  async clickCard() {
    await this.btnCard.click({ force: true });
  }
  async clickSubmit() {
    await this.btnSubmit.click();
  }
  async clickBtnChangeAddress() {
    await this.btnChangeAddress.click();
  }
  async clickBtnContinue() {
    await this.btnContinue.click();
  }
}

export default OrderPage;

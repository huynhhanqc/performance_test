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
    this.btnCard = page.locator(
      "//a[@href='https://beta.hasaki.vn/checkout/cart']//img[@class='loading']"
    );
    this.btnSubmit = page.locator(
      "(//button[@type='submit'][contains(text(),'Tiến hành đặt hàng')])[1]"
    );
    this.btnChangeAddress = page.locator(
      "(//button[@aria-label='Thay đổi'][contains(text(),'Thay đổi')])[1]"
    );
    this.btnContinue = page.locator("//button[contains(text(),'Tiếp tục')]");
    this.btnDeleteProduct = page.locator("//*[contains(text(),'Xóa')]");
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
  async clickBtnDeleteProduct() {
    await this.btnDeleteProduct.click();
  }
}

export default OrderPage;

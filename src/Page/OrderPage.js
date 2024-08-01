class OrderPage {
  constructor(page) {
    this.page = page;
    this.searchProduct = page.locator("//input[@id='search']");
    this.btnSearch = page.locator("//button[@class='btn_submit_search']");
    this.btnAddCard = page.locator("//span[contains(text(),'Giỏ hàng')]");
    this.btnCard = page.locator(
      "//a[@href='https://beta.hasaki.vn/checkout/cart']//img[@class='loading']"
    );
    this.btnSubmitThdh = page.locator(
      `//button[@onclick="window.pageCartStatic.onClick('cartCheckOutClick', this)"]`
    );
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
    await this.btnCard.click();
  }
  async clickSubmitThdh() {
    await this.btnSubmitThdh.click();
  }
}

export default OrderPage;

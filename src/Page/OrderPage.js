class OrderPage {
  constructor(page) {
    this.page = page;
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
    // this.btnDeleteProduct = page.$$(
    //   "//a[@class='item_sub_sp _removeItemCart']"
    // );
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
  // async clickBtnDeleteProduct() {
  //   // for (let i = 0; i < btnDeleteProduct.length; i++) {
  //   //   await btnDeleteProduct[i].click();
  //   // }
  // }
}

export default OrderPage;

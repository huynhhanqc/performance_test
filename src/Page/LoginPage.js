class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("//button[contains(text(),'Đăng nhập')]");
  }

  async enterUsername(username) {
    await this.usernameField.type(username);
  }

  async enterPassword(password) {
    await this.passwordField.type(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
export default LoginPage;

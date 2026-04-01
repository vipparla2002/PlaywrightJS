class LoginPage {
  constructor(page) {
    this.page = page;
    this.baseURL = 'https://www.saucedemo.com/';
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.productTitle = '#inventory_container';
    this.loginErrorMessage = 'xpath=//h3[text()="Epic sadface: Username and password do not match any user in this service"]';
  }

  async navigateToLoginPage() {
    await this.page.goto(this.baseURL);
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
    //await this.page.waitForLoadState('networkidle');
  }

  async isLoggedIn() {
    try {
      await this.page.waitForSelector(this.productTitle, { timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async verifyLoginErrorMessage() {
    try {
      await this.page.waitForSelector(this.loginErrorMessage, { timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = { LoginPage };

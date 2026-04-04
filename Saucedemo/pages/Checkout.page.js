const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.yourCartTitle = page.locator('span.title');
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.backHomeButton = page.locator('#back-to-products');
    this.checkoutCompleteMessage = page.locator('#checkout_complete_container');
  }
  async verifyCheckoutTitle() {
    expect(await this.yourCartTitle.textContent()).toBe('Your Cart')
  }

} 

module.exports = { CheckoutPage };

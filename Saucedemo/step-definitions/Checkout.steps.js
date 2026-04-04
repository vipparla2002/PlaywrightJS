const { Given, When, Then } = require('@cucumber/cucumber');
const { CheckoutPage } = require('../pages/Checkout.page');
const { expect } = require('playwright/test');

let expectedMessage = "Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home";
let checkoutPage;

Then('I click on the {string} button', async function(buttonName) {
  buttonName = buttonName.trim().toLowerCase().split(' ').join('_');
  switch(buttonName) {
    case 'checkout':
      checkoutPage = new CheckoutPage(this.page);
      await checkoutPage.checkoutButton.click();
      break;
    case 'continue':
      checkoutPage = new CheckoutPage(this.page);
      await checkoutPage.continueButton.click();
      break;
    case 'finish':
      checkoutPage = new CheckoutPage(this.page);  
      await checkoutPage.finishButton.click();
      break;
    case 'back_to_products':
      checkoutPage = new CheckoutPage(this.page);
      await checkoutPage.backHomeButton.click();
      break;
  }
});

Then('I fill in the checkout information with {string}, {string}, and {string}', async function(firstName, lastName, postalCode) {
  await checkoutPage.firstNameInput.fill(firstName);
  await checkoutPage.lastNameInput.fill(lastName);
  await checkoutPage.postalCodeInput.fill(postalCode);
});

Then('I verify that the order confirmation message is visible', async function() {
  checkoutPage = new CheckoutPage(this.page);
  expect(await checkoutPage.checkoutCompleteMessage.textContent()).toBe(expectedMessage);
});



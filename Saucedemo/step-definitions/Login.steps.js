const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/Login.page');
const { ProductsPage } = require('../pages/Products.page');
const { CheckoutPage } = require('../pages/Checkout.page');

let loginPage, productsPage, checkoutPage;

Given('I am on the {string} page', async function(pageName) {
  pageName = pageName.trim().toLowerCase().split(' ').join('_');
  switch(pageName)
  { 
    case 'login':
      loginPage = new LoginPage(this.page);
      await loginPage.navigateToLoginPage();
      break;

    case 'products':
      productsPage = new ProductsPage(this.page);
      await productsPage.verifyProductsTitle();
      break;

    case 'your_cart':
      productsPage = new ProductsPage(this.page);
      await productsPage.cart.click();
      checkoutPage = new CheckoutPage(this.page);
      await checkoutPage.verifyCheckoutTitle();
      break;
  }
});

When('I enter the {string} credentials', async function(credentialType) {
  credentialType = credentialType.trim().toLowerCase().split(' ').join('_');
  if (credentialType === 'valid') {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
  }
  else if (credentialType === 'invalid_incorrect_password') {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('wrong_password');
  }
  else if (credentialType === 'invalid_incorrect_username') {
    await loginPage.enterUsername('wrong_username');
    await loginPage.enterPassword('secret_sauce');
  }
  await loginPage.clickLoginButton();
});

Then('I expect to see an error message', async function() {
  await loginPage.verifyLoginErrorMessage();
});


Then('I expect to be logged in', async function() {
  const isLoggedInResult = await loginPage.isLoggedIn();
  if (!isLoggedInResult) {
    throw new Error('Login failed - not logged in');
  }
});

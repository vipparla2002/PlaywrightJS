const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/Login.page');
const { ProductsPage } = require('../pages/Products.page');

let loginPage, productsPage;


When('I can see the list of products', async function() {
  productsPage = new ProductsPage(this.page);
  await productsPage.verifyProductsVisible();
});

Then('I add {int} product(s) to the cart', async function(numberOfProducts) {
  productsPage = new ProductsPage(this.page);
  await productsPage.addProducts(numberOfProducts);
});

Then('I remove {int} product(s) from the cart', async function(numberOfProducts) {
  await productsPage.removeProducts(numberOfProducts);
});

Then('I verify if the cart badge shows {int} product(s)', async function(numberOfProducts) {
  await productsPage.verifyCartBadge(numberOfProducts);
});
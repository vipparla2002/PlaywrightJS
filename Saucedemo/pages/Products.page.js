const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.products = page.locator('.inventory_item');
    this.cart = page.locator('#shopping_cart_container');
  }
  async verifyProductsTitle() {
    await expect(this.productsTitle).toHaveText('Products');
  }

  async verifyProductsVisible() {
    await this.page.waitForLoadState('networkidle');
    const count = await this.products.count();
    expect(count).toBeGreaterThan(0);
    console.log(await this.products.locator('.inventory_item_name').allTextContents());
  }

  async addProducts(numberOfProducts) {
    for (let i = 0; i < numberOfProducts; i++) {
      await this.products.locator('button').nth(i).click();
    }
  }

  async removeProducts(numberOfProducts) {
    for (let i = 0; i < numberOfProducts; i++) {
      await this.products.locator('button').nth(i).click();
    }
  }

  async verifyCartBadge(numberOfProducts) {
    console.log(await this.cart.locator('span.shopping_cart_badge').textContent());
    expect(await this.cart.locator('span.shopping_cart_badge').textContent()).toBe(numberOfProducts.toString());
  }

} 

module.exports = { ProductsPage };

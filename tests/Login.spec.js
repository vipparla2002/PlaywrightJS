const {test, expect} = require('@playwright/test');

test('Login pass test', async ({page}) =>
{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
     await expect(page.locator('#login-button')).toContainText('Login');
    await page.locator('#login-button').click();   
    
   
})

test.only('Login fail test', async ({page}) =>
{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauc');
    await page.locator('#login-button').click(); 
    
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

    await page.locator('#password').clear();
})
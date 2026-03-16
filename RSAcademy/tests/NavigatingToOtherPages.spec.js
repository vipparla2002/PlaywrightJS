const {test, expect} = require('@playwright/test');

test.only('Login pass test', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    
    
    
   
})
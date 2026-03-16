const {test, expect} = require('@playwright/test');

test('Login pass test', async ({page}) =>
{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
     await expect(page.locator('#login-button')).toContainText('Login');
    await page.locator('#login-button').click();   
    
    await page.locator('[id*="add-to-cart"]').first().click();
    await page.locator('[id*="add-to-"]').last().click();
    await page.locator('[id*="add"]').nth(1).click(); //Second item

})

test('Get all products', async ({page}) =>
{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await expect(page.locator('#login-button')).toContainText('Login');
    await page.locator('#login-button').click();   

    //await page.waitForLoadState('networkidle'); //Waits till all network requests are done

    const listOfItems =  await page.locator('.inventory_item_name').allTextContents();

    console.log(listOfItems);

})

test.only('Get all products - RahulShettyAcademy', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#terms').check(); //Checks the checkbox
    expect(await page.locator('#terms')).toBeChecked(); //Asserts that the checkbox is checked

    await page.locator('#terms').uncheck(); //Unchecks the checkbox
    expect(await page.locator('#terms')).not.toBeChecked(); //Asserts that the checkbox is unchecked
   


    await page.pause(); 

    await page.locator('input[type="radio"]').last().click();
    await page.locator('input[type="radio"]').first().click();

    await page.locator("select[class='form-control']").click();
    await page.locator("select[class='form-control']").selectOption({ label: 'Teacher' });

    await page.pause(); //Pauses the test execution and opens the Playwright Inspector

    
    await page.locator('#signInBtn').click();   

    await page.waitForLoadState('domcontentloaded'); //Waits till all DOM content is loaded

    const listOfItems =  await page.locator('.card-title a').allTextContents();

    console.log(listOfItems);

})

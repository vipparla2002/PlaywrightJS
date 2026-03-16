const {test, expect} = require ('@playwright/test');

test.only('Page playwright test', async ({page}) =>
{
    //Below code can be skipped if we are using 
    // the page object in the test function parameter
    //These lines of code are required only when some
    // customization has to be done

    //  const context = await browser.newContext(); 
    //  //new instance of the browser is created,
    //  //so that the test can run in isolation

    //const page = await context.newPage();
    //  //new page is created in the browser context

    await page.goto('https://www.github.com');
    await expect(page).toHaveTitle('GitHub · Change is constant. GitHub keeps you ahead. · GitHub');
    console.log('Title of the page is: ' + await page.title());
}
);  

test('Browser playwright test', async ({browser}) =>
{
    const context = await browser.newContext(); 
    //new instance of the browser is created,
    //so that the test can run in isolation

    const page = await context.newPage();
    //new page is created in the browser context

    await page.goto('https://www.github.com');
}
);      
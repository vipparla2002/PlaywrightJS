const {test} = require('@playwright/test');

test('First Playwright Test', async () =>
//test('First Playwright Test', async function() - same as above
{
    //code here

    //JS is asynchronous, so we need to use async/await
    //All statements may run in any order,
    // so we need to use async/await to ensure that 
    // the statements run in the correct order

    //Ex.
    //  1. A button is clicked > New page is opened
    //  2. Some text has to be entered in the new page

    //In JS  1 and 2 may run in any order, so we need 
    // to use async/await to ensure that they run in 
    // the correct order

    //Solution is to use async before every
    // function and await before every 
    // statement that is asynchronous

    // Await before statement without async before
    //the function will not wait for the statement 
    // to complete 
}
);
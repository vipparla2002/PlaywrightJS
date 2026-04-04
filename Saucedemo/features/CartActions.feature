Feature: Actions related to the cart

Background: Login to the application

Given I am on the 'Login' page
When I enter the 'valid' credentials
Then I expect to be logged in

Scenario: Add products to the cart

When I am on the 'Products' page
And I can see the list of products
Then I add 3 products to the cart
And I verify if the cart badge shows 3 products

Scenario: Remove products from the cart
# Need to add at least 1 product(s) to remove it from the cart

When I am on the 'Products' page
And I can see the list of products
Then I add 3 products to the cart
And I verify if the cart badge shows 3 products
And I remove 2 products from the cart
And I verify if the cart badge shows 1 product






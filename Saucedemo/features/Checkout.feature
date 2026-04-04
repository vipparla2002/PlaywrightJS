Feature: Checkout process

Background: Add products to the cart

Given I am on the 'Login' page
When I enter the 'Valid' credentials
Then I expect to be logged in

Then I add 3 products to the cart

Scenario: Checkout with valid information

Given  I am on the 'Your Cart' page
Then I click on the 'Checkout' button
And I fill in the checkout information with 'John', 'Doe', and '12345'
And I click on the 'Continue' button
And I click on the 'Finish' button
And I verify that the order confirmation message is visible
And I click on the 'Back Home' button






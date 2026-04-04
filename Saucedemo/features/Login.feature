Feature: Login


Scenario: Login Positive Test

Given I am on the 'Login' page
When I enter the 'Valid' credentials
Then I expect to be logged in


Scenario: Login Negative Test - Incorrect Password

Given I am on the 'Login' page
When I enter the 'invalid_incorrect_password' credentials
Then I expect to see an error message

@this
Scenario: Login Negative Test - Incorrect Username

Given I am on the 'Login' page
When I enter the 'invalid_incorrect_username' credentials
Then I expect to see an error message
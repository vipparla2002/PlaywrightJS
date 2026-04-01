Feature: Login

@positive
Scenario: Login Positive Test

Given I am on the 'Login' page
When I enter the 'valid' credentials
Then I expect to be logged in


Scenario: Login Negative Test - Incorrect Password

Given I am on the 'Login' page
When I enter the 'invalid_incorrect_password' credentials
Then I expect to see an error message


Scenario: Login Negative Test - Incorrect Username

Given I am on the 'Login' page
When I enter the 'invalid_incorrect_username' credentials
Then I expect to see an error message
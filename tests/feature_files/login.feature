Feature: Functionality test of rentifAi dev

Scenario Outline: Check the login page with crendentials
Given User opens the website URL
Then Verify that user is on homepage
When User clicks the on the login button
When User fills the email "<validEmail>" in the email field
When User fills the password "<validPassword>" in the password field
When User clicks the SignIn button on the login page

Examples:
| validEmail             | validPassword |
| vikasvkybrix@gmail.com | Hello@123     | 





Feature: As a QA, I would like to verify all negative scenarios for login

  Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. 
  Verify that a error message is displayed and the text that it contains is as expected.
    Given I am on search page
    When I try to input a invalid password and email
    Then I can verify all the error message and the text

    Given I am on search page
    When I try to input a empty value
    Then I can verify the error message and the text

  

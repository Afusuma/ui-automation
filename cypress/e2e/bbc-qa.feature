Feature: As a QA, I would like to verify all negative scenarios for login

  Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. 
  Verify that a error message is displayed and the text that it contains is as expected.
    Given I am on empty home page
    When I type and submit in the board name
    Then I should be redirected to the board detail

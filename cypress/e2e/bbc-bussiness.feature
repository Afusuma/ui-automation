Feature: As a business user, I would like to make a record of all teams which are playing today

  Scenario: Output all team names with a match today.
  If there are no matches today, output a message to convey this.
    Given I am on empty home page
    When display the name of all today's teams
    Then I validate if it is bringing a name or not

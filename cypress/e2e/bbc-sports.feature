Feature: As a sports user, I would like to read about all articles related to sports

  Scenario: Use the search option to find all articles related to sports.
  Output the first heading and the last heading returned on the page.
    When I search for articles about sport
    Then I can print the first and last article on the page

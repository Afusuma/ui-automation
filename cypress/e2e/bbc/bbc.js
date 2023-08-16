import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { isEmpty } from "lodash";

beforeEach(() => {
  cy.visit('/')
  cy.get('button[id="bbccookies-continue-button"]').click()
})

// SCENARIO 1
Given("I am on empty home page", () => {
    cy.mainUrl();
});

When("display the name of all today's teams", () => {
  cy.visit('/sport')
  cy.get('[href="https://www.bbc.com/sport"]').contains('Sport').click({force: true})
  cy.get('[href="/sport/football"]').contains('Football').click()
  cy.get('[href="/sport/football/scores-fixtures"]').contains('Scores & Fixtures').click()
});

Then("I validate if it is bringing a name or not", () => {
  cy.get('span[class="sp-c-fixture__team-name-wrap"]').should("be.visible").then(($teams) => {
    if ($teams.length > 0) {
      const teamNames = $teams.map((index, el) => Cypress.$(el).text()).get();
      cy.log('All teams:', teamNames.join(', '));
    } else {
      cy.log('Not found.');
    }
  })
});

//SCENARIO 2
When("I search for articles about sport", () => {
  const searchTerm = 'sports';
  cy.visit('https://www.bbc.co.uk/search?d=SEARCH_PS');

  cy.get('#search-input')
    .type(searchTerm)
    .type('{enter}');
  cy.wait(2000); 
});

Then("I can print the first and last article on the page", () => {
  cy.get('p[class="ssrcss-6arcww-PromoHeadline e1f5wbog6"]')
    .first()
    .invoke('text')
    .then((firstHeading) => {
      console.log('First Heading:', firstHeading);
    });

    cy.get('p[class="ssrcss-6arcww-PromoHeadline e1f5wbog6"]')
    .last()
    .invoke('text')
    .then((lastHeading) => {
      console.log('Last Heading:', lastHeading);
    });
});

// SCENARIO 3
Given("I am on search page", () => {
  cy.visit('https://www.bbc.co.uk/search?d=SEARCH_PS');
  cy.contains('Sign in').click();
});

When("I try to input a invalid password and email", () => {
  cy.get('input[type="email"]').type('invalid_email');
  cy.get('input[type="password"]').type('invalid_password');
  cy.get('[id="submit-button"]').click();
});

Then("I can verify all the error message and the text", () => {
  cy.contains('Looks like either the email/username or password is wrong. Try again, ').should('be.visible');
});

//SCENARIO 3.1
When("I try to input a empty value", () => {
  cy.get('input[type="email"]').clear();
  cy.get('input[type="password"]').clear();
  cy.contains('Sign in').click();
});

Then("I can verify the error message and the text", () => {
  cy.contains('Something\'s missing').should('be.visible');
  cy.contains('Please check and try again.').should('be.visible');
});





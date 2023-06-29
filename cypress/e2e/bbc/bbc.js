import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
  cy.visit('/')
  cy.get('button[id="bbccookies-continue-button"]').click()
})

Given("I am on empty home page", () => {
    cy.mainUrl();
});

When("display the name of all today's teams", () => {
  cy.visit('/sport')
  cy.get('[href="https://www.bbc.com/sport"]').contains('Sport').click({force: true} )
  cy.get('[href="/sport/football"]').contains('Football').click()
  cy.get('[href="/sport/football/scores-fixtures"]').contains('Scores & Fixtures').click()
});

Then("I validate if it is bringing a name or not", () => {
  const getText = ($el) => {
    return Cypress._.map($el, 'innerText')
  }
  if (cy.get('span[class="sp-c-fixture__team-name-wrap"]').should("be.visible")) {
      console.log(getText)
  } else {
    console.log('Not found')
  } 
});


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

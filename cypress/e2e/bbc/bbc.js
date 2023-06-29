import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { values } from "lodash";

beforeEach(() => {
  cy.visit('/')
  cy.get('button[id="bbccookies-continue-button"]').click()
})

Given("I am on empty home page", () => {
    cy.origin('https://www.bbc.com', () => {
})
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

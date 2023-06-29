import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on empty home page", () => {
    cy.visit('/')
    cy.origin('https://www.bbc.com', () => {
    cy.get('button[id="bbccookies-continue-button"]').click()
})
});

When("display the name of all today's teams", () => {
  cy.get("[data-cy=first-board]").type('new board{enter}');
});

Then("I validate if it is bringing a name or not", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});

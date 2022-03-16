export const getUsernameTextbox = (): Cypress.Chainable => cy.get("#userName");

export const getEmailTextbox = (): Cypress.Chainable => cy.get("#userEmail");

export const getCurrentAddressTextbox = (): Cypress.Chainable =>
  cy.get("#currentAddress");

export const getPermanentAddressTextbox = (): Cypress.Chainable =>
  cy.get("#permanentAddress");

export const getSubmitButton = (): Cypress.Chainable => cy.get("#submit");

export const verifyName = (name: string): Cypress.Chainable =>
  cy.get("#name").should("have.text", `Name:${name}`);

export const verifyEmail = (email: string): Cypress.Chainable =>
  cy.get("#email").should("have.text", `Email:${email}`);

export const verifyCurrentAddress = (
  currentAddress: string
): Cypress.Chainable =>
  cy
    .get(".border > #currentAddress")
    .should("include.text", `Current Address :${currentAddress}`);

export const verifyPermanentAddress = (
  permanentAddress: string
): Cypress.Chainable =>
  cy
    .get(".border > #permanentAddress")
    .should("have.text", `Permanent Address :${permanentAddress}`);

//Should each function parameter utilize unique names or can they be reused in other functions.

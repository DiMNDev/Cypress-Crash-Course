
export const getUsernameTextbox = (): Cypress.Chainable => cy.get('#userName');

export const getEmailTextbox = (): Cypress.Chainable => cy.get('#userEmail');

export const getCurrentAddressTextbox = (): Cypress.Chainable => cy.get('#currentAddress');

export const getPermanentAddressTextbox = (): Cypress.Chainable => cy.get('#permanentAddress');

export const getSubmitButton = (): Cypress.Chainable => cy.get('#submit');
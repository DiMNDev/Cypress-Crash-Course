
export const getUsernameTextbox = (): Cypress.Chainable => cy.get('[placeholder=Email]');

export const getPasswordTextbox = (): Cypress.Chainable => cy.get('[placeholder=Password]');

export const getRememberMe = (): Cypress.Chainable => cy.get('[type=checkbox]').should('have.id', 'user[remember_me]');
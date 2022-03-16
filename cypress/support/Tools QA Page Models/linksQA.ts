export const getLink = (linkID: string,linkText: string): Cypress.Chainable => cy.get(`[id=${linkID}]`).should('include.text', `${linkText}`);

export const verifyAPIResponse = (response: string): Cypress.Chainable => cy.get('[id=linkResponse]').should('include.text', response);

export const interceptCreated = (): Cypress.Chainable => cy.intercept("GET", "/created").as('created-intercept');

export const getIntercept = (interceptURL: string,alias: string): Cypress.Chainable => cy.intercept('GET', `${interceptURL}`).as(`${alias}`);

export const waitFor = (alias: string): Cypress.Chainable => cy.wait(alias);
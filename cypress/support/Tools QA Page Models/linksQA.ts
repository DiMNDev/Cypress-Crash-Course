export const getLink = (linkID,linkText): Cypress.Chainable => cy.get(`[id=${linkID}]`).should('include.text', `${linkText}`);

export const verifyAPIResponse = (response): Cypress.Chainable => cy.get('[id=linkResponse]').should('include.text', response);

export const interceptCreated = (): Cypress.Chainable => cy.intercept("GET", "/created").as('created-intercept');

export const getIntercept = (interceptURL,alias): Cypress.Chainable => cy.intercept('GET', `${interceptURL}`).as(`${alias}`);
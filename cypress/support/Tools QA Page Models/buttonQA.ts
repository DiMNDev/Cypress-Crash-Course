export const getButtonOne = (): Cypress.Chainable => cy.get('#doubleClickBtn').should('have.text', 'Double Click Me');

export const getButtonTwo = (): Cypress.Chainable => cy.get('#rightClickBtn').should('have.text', 'Right Click Me');

export const getButtonThree = (): Cypress.Chainable => cy.get('[type=button').eq(3).should('have.text', 'Click Me');

export const validateClick = (id: string): Cypress.Chainable => cy.get(`[id=${id}]`);
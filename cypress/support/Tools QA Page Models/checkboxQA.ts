export const getHomeCollapseArrow = (): Cypress.Chainable => cy.get('.rct-collapse > .rct-icon');

export const checkDesktop = (): Cypress.Chainable => cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon');


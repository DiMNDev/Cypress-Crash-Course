export const getRandomTextId = (): Cypress.Chainable => cy.get('p').should('have.text', 'This text has random Id');

export const getWillEnableButton = (): Cypress.Chainable => cy.get('[id=enableAfter]');

export const getColorChangeButton = (): Cypress.Chainable => cy.get('[id=colorChange]');

export const getVisibleAfterButton = (): Cypress.Chainable => cy.get('[id=visibleAfter]');

export const wait5Seconds = (): Cypress.Chainable => cy.wait(5000);
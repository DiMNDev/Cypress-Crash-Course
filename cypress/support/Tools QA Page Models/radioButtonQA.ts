export const getRadio = (radioID: string): Cypress.Chainable => cy.get('[id=' + radioID + ']').should('have.id', radioID);

export const verifyRadioSuccess = (radioCheck: string): Cypress.Chainable => cy.get('[class=text-success]').should('have.text', radioCheck);
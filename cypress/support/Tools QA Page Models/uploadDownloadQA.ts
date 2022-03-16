export const getDownloadButton = (): Cypress.Chainable => cy.get('[id=downloadButton').should('contain', 'Download');

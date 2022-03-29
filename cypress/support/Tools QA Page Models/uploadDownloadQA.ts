export const getDownloadButton = (): Cypress.Chainable => cy.get('[id=downloadButton').should('contain', 'Download');

export const getUploadButton = (): Cypress.Chainable => cy.get('#uploadFile');

export const uploadFile = (filePathUpload: string): Cypress.Chainable => getUploadButton().selectFile(filePathUpload);

export const verifyDownload = (filePathDownload: string): Cypress.Chainable => cy.readFile(`cypress/downloads/${filePathDownload}`).should('exist');

export const verifyUpload = (filePathUpload: string): Cypress.Chainable => cy.get('#uploadedFilePath').should('contain', filePathUpload);

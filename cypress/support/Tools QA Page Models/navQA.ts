
export const getTextboxNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('have.text', 'Text Box');

export const getCheckboxNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').should('have.text', 'Check Box');

export const getRadioNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').should('have.text', 'Radio Button');

export const getWebTableNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').should('have.text', 'Web Tables');

export const getButtonNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').should('have.text', 'Buttons');

export const getLinksNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-5 > .text').should('have.text', 'Links');

export const getBrokenLinksNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').should('have.text', 'Broken Links - Images');

export const getUploadDownloadNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-7 > .text').should('have.text', 'Upload and Download');

export const  getDynamicPropertiesNav = (): Cypress.Chainable => cy.get(':nth-child(1) > .element-list > .menu-list > #item-8 > .text').should('have.text', 'Dynamic Properties');
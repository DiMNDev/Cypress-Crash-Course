
export const visitPage = (pageUrl: string): Cypress.Chainable => cy.visit(pageUrl);

export const goBack = (): Cypress.Chainable => cy.go("back");

export const verifySuccess = (): Cypress.Chainable => cy.get("[class=entry-title]").contains("success");

export const getButtonOne = (): Cypress.Chainable => cy.get("[id=idExample]");

export const getButtonTwo = (): Cypress.Chainable => cy.get("[class=buttonClass]");

export const getButtonThree = (): Cypress.Chainable => cy.get("[name=button1]");

export const getLinkOne = (): Cypress.Chainable => cy.get("a").contains('this link text');

export const getLoginButton = (): Cypress.Chainable => cy.get('a').contains('Go to login page');





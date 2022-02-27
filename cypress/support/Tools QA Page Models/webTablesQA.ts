export const addNewRecord = (): Cypress.Chainable => cy.get('[id=addNewRecordButton]');

export const getFirstName = (): Cypress.Chainable => cy.get('[id=firstName]');

export const getLastName = (): Cypress.Chainable => cy.get('[id=lastName]');

export const getEmail = (): Cypress.Chainable => cy.get('[id=userEmail]');

export const getAge = (): Cypress.Chainable => cy.get('[id=age]');

export const getSalary = (): Cypress.Chainable => cy.get('[id=salary]');

export const getDepartment = (): Cypress.Chainable => cy.get('[id=department');

export const submitButton = (): Cypress.Chainable => cy.get('[id=submit]');

export const deleteRecord =(entryIndex): Cypress.Chainable => cy.get('#delete-record-' + entryIndex)

export const editRecord =(entryIndex): Cypress.Chainable => cy.get('#edit-record-' + entryIndex)

export const getTable = (verticalIndex: string, horizontalIndex: string): Cypress.Chainable => cy.get(`.rt-tbody > :nth-child(${verticalIndex}) > .rt-tr > :nth-child(${horizontalIndex})`)
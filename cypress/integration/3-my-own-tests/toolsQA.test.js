/// <reference types="cypress" />

context('Check elements',() => {
    
    specify('Textbox test', () => {
        cy.visit('https://demoqa.com/elements')
        cy.get('[id=item-0]').contains('Text Box').click()
        cy.get('[id=userName').type('username')
        cy.get('[id=userEmail').type('useremail@gmail.com')
        cy.get('[id=currentAddress').type('123 street brooklyn 22345')
        cy.get('[id=permanentAddress').type('123 street brooklyn 22345')
        cy.get('[id=submit]').click()
    })

    specify('Checkbox test', () => {
        cy.get('[id=item-1]').contains('Check Box').click()
        cy.get('.rct-collapse > .rct-icon').click()
        cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click()
    
    })
})
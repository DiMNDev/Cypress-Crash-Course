/// <reference types="cypress" />

describe('adsass',() =>{

    it('test one', () => {
    cy.visit('http://localhost:3000')
    cy.get('[id^=yearFilterSelect]').select('2020')
    cy.contains('Toilet')
})
})
/// <reference types="cypress" />

import simpleObjects from "../../support/Page Objects/ultimateObjectsJavascript.js";

context("Elements Test", () => {
  specify("Visit webpage for testing", () => {
    simpleObjects.vistPage();
  });

  specify("Test button one by id", () => {
    simpleObjects.getButtonOne();
    cy.get("@idButton").click();
    simpleObjects.goBack();
  });

  specify("Test button two by class", () => {
    simpleObjects.getButtonTwo();
    cy.get("@classButton").click();
    simpleObjects.goBack();
  });

  specify("Test button three by name", () => {
    simpleObjects.getButtonThree();
    cy.get("@nameButton").click();
    simpleObjects.goBack();
  });

  specify("Test hyperlink by text", () => {
    simpleObjects.getLinktext();
    cy.get("@linkButton").click();
    simpleObjects.goBack();
  });

  specify("Visit and test login", () => {
    simpleObjects.getLoginButton();
    cy.get("@loginButton").click();
    simpleObjects.getInputUsername();
    cy.get("@userEmail").type("useremail@email.com");
    simpleObjects.getInputPassword();
    cy.get("@userPassword").type("123pass456");
    simpleObjects.checkRememberMe();
    cy.get("@rememberCheck").check();
  });

  specify('Test using typescript functions', () =>{
    
  })
});

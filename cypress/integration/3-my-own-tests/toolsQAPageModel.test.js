/// <reference types="cypress" />

import * as navigation from "../../support/Tools QA Page Models/navQA";

import * as textboxPage from "../../support/Tools QA Page Models/textboxQA";

import * as checkboxPage from "../../support/Tools QA Page Models/checkboxQA";

import * as radioPage from "../../support/Tools QA Page Models/radioButtonQA";

import * as webTablePage from "../../support/Tools QA Page Models/webTablesQA";

import * as buttonPage from "../../support/Tools QA Page Models/buttonQA";

import * as linkPage from "../../support/Tools QA Page Models/linksQA";

context("Check elements", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/elements");
  });
  //#region Textbox
  specify("Textbox test", () => {
    navigation.getTextboxNav().click();
    textboxPage.getUsernameTextbox().type("username");
    textboxPage.getEmailTextbox().type("useremail@gmail.com");
    textboxPage.getCurrentAddressTextbox().type("123 street brooklyn 22345");
    textboxPage.getPermanentAddressTextbox().type("123 street brooklyn 22345");
    textboxPage.getSubmitButton().click();
    cy.get("#name").should("have.text", "Name:username");
    cy.get("#email").should("have.text", "Email:useremail@gmail.com");
    //Error included uneccesary space at the end of the address
    cy.get(".border > #currentAddress").should(
      "include.text",
      'Current Address :123 street brooklyn 22345'
    );
    //Error incorecct spelling of Permanent [Permananet]
    cy.get(".border > #permanentAddress").should(
      "have.text",
      "Permanent Address :123 street brooklyn 22345"
    );
  });
  //#endregion

  //#region Checkbox
  specify("Checkbox test", () => {
    navigation.getCheckboxNav().click();
    checkboxPage.getHomeCollapseArrow().click();
    checkboxPage.checkDesktop().click();
    cy.get("#result").should("exist", "desktop");
  });
  //#endregion

  //#region Radio
  specify("Radio Button test", () => {
    navigation.getRadioNav().click();
    radioPage.getRadio("yesRadio").click({ force: true });
    radioPage.verifyRadioSuccess("Yes");
    radioPage.getRadio("impressiveRadio").click({ force: true });
    radioPage.verifyRadioSuccess("Impressive");
    radioPage.getRadio("noRadio").should("be.disabled");
  });
  //#endregion

  //#region Web Table
  specify("Web Table test", () => {
    navigation.getWebTableNav().click();
    webTablePage.addNewRecord().click();
    webTablePage.getFirstName().type("Joe");
    webTablePage.getLastName().type("Shmo");
    webTablePage.getEmail().type("Joeshmo@gmail.com");
    webTablePage.getAge().type("29");
    webTablePage.getSalary().type("100000");
    webTablePage.getDepartment().type("Quality Assurance");
    webTablePage.submitButton().click();
    webTablePage.getTable("1", "1").should("have.text", "Cierra");
    webTablePage.getTable("2", "1").should("have.text", "Alden");
    webTablePage.getTable("3", "1").should("have.text", "Kierra");
    webTablePage.getTable("4", "1").should("have.text", "Joe");
    webTablePage.getTable("3", "3").should("have.text", "29");
    webTablePage.deleteRecord("3").click();
    webTablePage.getTable("3", "1").should("have.text", "Joe");
    webTablePage.editRecord("2").click();
    webTablePage.getFirstName().clear().type("Samwise");
    webTablePage.submitButton().click();
    webTablePage.getTable("2", "1").should("have.text", "Samwise");
  });
  //#endregion

  //#region Button
  specify("Button test", () => {
    navigation.getButtonNav().click();
    buttonPage.getButtonOne().dblclick();
    buttonPage
      .validateClick("doubleClickMessage")
      .should("contain", "double click");
    buttonPage.getButtonTwo().rightclick();
    buttonPage
      .validateClick("rightClickMessage")
      .should("contain", "right click");
    buttonPage.getButtonThree().click();
    buttonPage
      .validateClick("dynamicClickMessage")
      .should("contain", "dynamic click");
  });
  //#endregion

  //#region Links
  specify.only("Links test", () => {
    navigation.getLinksNav().click();
    linkPage
      .getLink("simpleLink", "Home")
      .should("have.attr", "target", "_blank");
    linkPage
      .getLink("dynamicLink", "Home")
      .should("have.attr", "target", "_blank");
    linkPage.interceptCreated();
    linkPage.getLink("created", "Created").click();
    cy.wait('@created-intercept');
    linkPage.verifyAPIResponse('201');

    linkPage.getIntercept('/no-content', 'no-content-intercept');
    linkPage.getLink('no-content', 'No Content').click();
    cy.wait('@no-content-intercept');
    linkPage.verifyAPIResponse('204');

    linkPage.getIntercept('/moved', 'moved-intercept');
    linkPage.getLink('moved', 'Moved').click();
    cy.wait('@moved-intercept');
    linkPage.verifyAPIResponse('301');

    linkPage.getIntercept('/bad-request', 'bad-request-intercept');
    linkPage.getLink('bad-request', 'Bad Request').click();
    cy.wait('@bad-request-intercept');
    linkPage.verifyAPIResponse('400')

    linkPage.getIntercept('/unauthorized', 'unauthorized-intercept');
    linkPage.getLink('unauthorized', 'Unauthorized').click();
    cy.wait('@unauthorized-intercept');
    linkPage.verifyAPIResponse('401');

    linkPage.getIntercept('/forbidden', 'forbidden-intercept');
    linkPage.getLink('forbidden', 'Forbidden').click();
    cy.wait('@forbidden-intercept');
    linkPage.verifyAPIResponse('403');

    linkPage.getIntercept('/invalid-url', 'not-found-intercept');
    linkPage.getLink('invalid-url', 'Not Found').click();
    cy.wait('@not-found-intercept');
    linkPage.verifyAPIResponse('404')


  });
  //#endregion
});

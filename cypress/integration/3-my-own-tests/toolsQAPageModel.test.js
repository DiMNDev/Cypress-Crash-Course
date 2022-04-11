/// <reference types="cypress" />

import * as navigation from "../../support/Tools QA Page Models/navQA";

import * as textboxPage from "../../support/Tools QA Page Models/textboxQA";

import * as checkboxPage from "../../support/Tools QA Page Models/checkboxQA";

import * as radioPage from "../../support/Tools QA Page Models/radioButtonQA";

import * as webTablePage from "../../support/Tools QA Page Models/webTablesQA";

import * as buttonPage from "../../support/Tools QA Page Models/buttonQA";

import * as linkPage from "../../support/Tools QA Page Models/linksQA";

import * as brokenLinksPage from "../../support/Tools QA Page Models/brokenLinksQA";

import * as uploadDownloadPage from "../../support/Tools QA Page Models/uploadDownloadQA";

import * as dynamicPropertiesPage from "../../support/Tools QA Page Models/dynamicPropertiesQA";

context("Check elements", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
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
    textboxPage.verifyName("username");
    textboxPage.verifyEmail("useremail@gmail.com");
    //Error included uneccesary space at the end of the address (fails with have.text passes with include.text) reference page model
    textboxPage.verifyCurrentAddress("123 street brooklyn 22345");
    //Error incorrect spelling of Permanent [Permananet] (fails for incorrect spelling) reference page model
    textboxPage.verifyPermanentAddress("123 street brooklyn 22345");
  });
  //#endregion

  //#region Checkbox
  specify("Checkbox test", () => {
    navigation.getCheckboxNav().click();
    checkboxPage.getHomeCollapseArrow().click();
    checkboxPage.checkDesktop().click();
    checkboxPage.verifyResult("Desktop");
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
  specify("Links test", () => {
    navigation.getLinksNav().click();
    linkPage
      .getLink("simpleLink", "Home")
      .should("have.attr", "target", "_blank");
    linkPage
      .getLink("dynamicLink", "Home")
      .should("have.attr", "target", "_blank");
      
    linkPage.interceptCreated();
    linkPage.getLink("created", "Created").click();
    linkPage.waitFor("@created-intercept");
    linkPage.verifyAPIResponse("201");

    linkPage.getIntercept("/no-content", "no-content-intercept");
    linkPage.getLink("no-content", "No Content").click();
    linkPage.waitFor("@no-content-intercept");
    linkPage.verifyAPIResponse("204");

    linkPage.getIntercept("/moved", "moved-intercept");
    linkPage.getLink("moved", "Moved").click();
    linkPage.waitFor("@moved-intercept");
    linkPage.verifyAPIResponse("301");

    linkPage.getIntercept("/bad-request", "bad-request-intercept");
    linkPage.getLink("bad-request", "Bad Request").click();
    linkPage.waitFor("@bad-request-intercept");
    linkPage.verifyAPIResponse("400");

    linkPage.getIntercept("/unauthorized", "unauthorized-intercept");
    linkPage.getLink("unauthorized", "Unauthorized").click();
    linkPage.waitFor("@unauthorized-intercept");
    linkPage.verifyAPIResponse("401");

    linkPage.getIntercept("/forbidden", "forbidden-intercept");
    linkPage.getLink("forbidden", "Forbidden").click();
    linkPage.waitFor("@forbidden-intercept");
    linkPage.verifyAPIResponse("403");

    linkPage.getIntercept("/invalid-url", "not-found-intercept");
    linkPage.getLink("invalid-url", "Not Found").click();
    linkPage.waitFor("@not-found-intercept");
    linkPage.verifyAPIResponse("404");
  });
  //#endregion

  //#region Broken Links
  specify("Broken links test", () => {
    navigation.getBrokenLinksNav().click();
    brokenLinksPage.getValidImage().should("exist");
    //THIS IS NOT ACTUALLY VISIBLE!
    brokenLinksPage.getBrokenImage().should("be.visible");
    //Can use more direct locator or grab src alone
    brokenLinksPage.getAndVerifyImage(
      ':nth-child(2) > [src="/images/Toolsqa.jpg"]',
      100,
      347
    );
    brokenLinksPage.getAndVerifyImage('[src="/images/Toolsqa_1.jpg"]', 0, 0);
    brokenLinksPage.requestAndVerify("/images/Toolsqa.jpg", 200);
    brokenLinksPage.requestAndVerify("http://demoqa.com", 200);
    brokenLinksPage.requestAndVerify("/images/Toolsqa_1.jpg", 200);
    brokenLinksPage.requestAndVerify(
      "http://the-internet.herokuapp.com/status_codes/500",
      500
    );
  });
  //#endregion

  //#region Upload and Download
  specify("Upload and Download test", () => {
    navigation.getUploadDownloadNav().click();
    uploadDownloadPage.getDownloadButton().click();
    uploadDownloadPage.verifyDownload('sampleFile.jpeg');
    uploadDownloadPage.uploadFile('cypress/fixtures/Ace_diamonds.svg');
    uploadDownloadPage.verifyUpload('Ace_diamonds')

    
  });
  //#endregion

  //#region Dynamic Properties
specify('Dynamic properties test', () => {
navigation.getDynamicPropertiesNav().click();
dynamicPropertiesPage.getRandomTextId().should('exist');
dynamicPropertiesPage.getWillEnableButton().should('be.disabled');
dynamicPropertiesPage.getColorChangeButton().should('have.css', 'color', 'rgb(255, 255, 255)' );
dynamicPropertiesPage.getVisibleAfterButton().should('not.exist');
dynamicPropertiesPage.wait5Seconds();
dynamicPropertiesPage.getWillEnableButton().should('be.enabled');
dynamicPropertiesPage.getColorChangeButton().should('have.css', 'color', 'rgb(220, 53, 69)' );
dynamicPropertiesPage.getVisibleAfterButton().should('exist');

});

  //#endregion
});

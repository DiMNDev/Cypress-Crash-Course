import * as examplePage from "../../support/Page Objects/ultimateObjectsTypescript";

import * as loginPage from '../../support/Page Objects/ultimateObjectsLoginTypescript'

context("Typescript function test button one", () => {
  specify("Visit UltimateQA", () => {
    examplePage.visitPage(
      "https://ultimateqa.com/simple-html-elements-for-automation/"
    );
  });

  specify("Get button one by ID", () => {
    examplePage.getButtonOne().click();
    examplePage.verifySuccess();
    examplePage.goBack();
  });

  specify("Get button two by class", () => {
    examplePage.getButtonTwo().click();
    examplePage.verifySuccess();
    examplePage.goBack();
  });

  specify("Get button three by name", () => {
    examplePage.getButtonThree().click();
    examplePage.verifySuccess();
    examplePage.goBack();
  });

  specify("Get link with text", () => {
    examplePage.getLinkOne().click();
    examplePage.verifySuccess();
    examplePage.goBack();
  });

  specify('Get login page', () => {
    examplePage.getLoginButton().click();
  });
  
  specify('Fill in login form', () => {
    loginPage.getUsernameTextbox().type('useremail@email.com');
    loginPage.getPasswordTextbox().type('123pass456');
    loginPage.getRememberMe().check();
  })
});

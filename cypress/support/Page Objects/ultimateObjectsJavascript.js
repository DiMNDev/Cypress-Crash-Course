class simpleObjects {
  vistPage() {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
  }

  getButtonOne() {
    return cy.get("[id=idExample]").as("idButton");
  }

  goBack() {
    cy.get("[class=entry-title]").contains("success");
    cy.go("back");
  }

  getButtonTwo() {
    return cy.get("[class=buttonClass]").as("classButton");
  }

  getButtonThree() {
    return cy.get("[name=button1]").as("nameButton");
  }

  getLinktext() {
    return cy.get('a').contains('this link text').as('linkButton')
  }

  getLoginButton() {
    return cy.get('a').contains('Go to login page').as('loginButton')
  }

  getInputUsername() {
    return cy.get('[placeholder=Email]').as('userEmail')
  }

  getInputPassword() {
    return cy.get('[placeholder=Password]').as('userPassword')
  }

  checkRememberMe() {
    return cy.get('[type=checkbox]').as('rememberCheck')
  }

}
export default new simpleObjects();

// cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
// cy.get("[id=idExample]").click();
// cy.get("[class=entry-title]").contains("Button success");
// cy.go("back");

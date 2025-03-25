class Login {
  constructor() {
    this.url = "https://www.saucedemo.com/";
  }
  visit() {
    cy.visit("/");
  }

  getUsernameField() {
    return cy.get("#user-name").should("exist");
  }
  getPasswordField() {
    return cy.get("#password").click();
  }
  getLoginButton() {
    return cy.get('[data-test = "login-button"]').click();
  }
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default Login;

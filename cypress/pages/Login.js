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
    return cy.get("#password");
  }
  getLoginButton() {
    return cy.get("#login-button");
  }
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

class Logout {
  constructor() {
    this.url = "https://www.saucedemo.com/";
  }
  visit() {
    cy.visit("/");
  }
  getMenuBar() {
    return cy.get("#react-burger-menu-btn");
  }
  getLogout() {
    return cy.get("#logout_sidebar_link");
  }
}
export default { Login, Logout };

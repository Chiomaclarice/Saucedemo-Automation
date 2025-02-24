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
export default Logout;

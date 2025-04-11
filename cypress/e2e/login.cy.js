import Login from "../pages/Login";
import Logout from "../pages/Logout";

const login = new Login();
const logout = new Logout();

describe("Login Saucedemo", () => {
  let loginData; //variable declaration

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data; //storing fixture data in a variable
      login.visit();
      cy.wait(1000);
    });
  });

  it("Login successfully on Saucedemo", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton();
    cy.title().should("eq", "Swag Labs");
  });
  it("Verify user is logged out successfully", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton().click();
    logout.getMenuBar().should("be.visible").click();
    logout.getLogout().should("be.visible").click();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
  it("Verify unsuccessful login with invalid credentials", () => {
    login.getUsernameField().type(loginData.invalidCredentials.username);
    login.getPasswordField().type(loginData.invalidCredentials.password);
    login.getLoginButton();
    login
      .getErrorMessage()
      .should(
        "contain",
        "Username and password do not match any user in this service"
      );
  });

  it("Verify login fails for locked out user", () => {
    login.getUsernameField().type(loginData.lockedUser.username);
    login.getPasswordField().type(loginData.lockedUser.password);
    login.getLoginButton();
    login
      .getErrorMessage()
      .should("contain.text", "Sorry, this user has been locked out.");
  });

  it("Verify login fails when username and password fields are left empty", () => {
    login.getLoginButton();
    login.getErrorMessage().should("contain", "Username is required");
  });

  afterEach(() => {
    cy.get("body").then(($body) => {
      if ($body.find("#react-burger-menu-btn").length > 0) {
        logout.getMenuBar().should("be.visible").click();
        logout.getLogout().should("be.visible").click();
        cy.url().should("eq", "https://www.saucedemo.com/");
      }
    });
  });
});

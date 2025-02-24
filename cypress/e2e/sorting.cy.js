import Sorting from "../pages/Sorting";
import Login from "../pages/Login";

const sorting = new Sorting();
const login = new Login();

describe("Validate product sorting/filtering", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
      login.visit();
    });
  });

  it("Sort product by name(A-Z)", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton().click();
    sorting.getSortContainer().select("Name (A to Z)");
    sorting.getAtoZItem().should("contain", "Sauce Labs Backpack");
  });

  it("Sort product by name(Z-A)", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton().click();
    sorting.getSortContainer().select("Name (Z to A)");
    sorting
      .getZtoAitem()
      .should("contain", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Sort product by price(low to high)", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton().click();
    sorting.getSortContainer().select("Price (low to high)");
    sorting.getPriceLowtoHigh().should("contain", "Sauce Labs Onesie");
  });

  it("Sort product by price(high to low)", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login
      .getPasswordField()
      .should("be.visible")
      .type(loginData.validCredentials.password);
    login.getLoginButton().click();
    sorting.getSortContainer().select("Price (high to low)");
    sorting.getPriceHightoLow().should("contain", "Sauce Labs Fleece Jacket");
  });
});

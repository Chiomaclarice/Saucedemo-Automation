import Login from "../pages/Login";
import Cart from "../pages/Cart";

const login = new Login();
const cart = new Cart();

describe("Add to Cart Scenarios", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("loginData").then((user) => {
      loginData = user;
      login.visit();
      cy.wait(500);
    });
  });

  it("User should successfully add to cart", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login.getPasswordField().type(loginData.validCredentials.password);
    login.getLoginButton();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cart.addToCart1();
    cart.addToCart2();
    cart.addToCart3();
    cart.getCartIcon().should("contain", 3);
  });

  it("remove items from cart", () => {
    login.getUsernameField().type(loginData.validCredentials.username);
    login.getPasswordField().type(loginData.validCredentials.password);
    login.getLoginButton();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cart.addToCart1();
    cart.addToCart2();
    cart.addToCart3();
    cart.getCartIcon().should("contain", 3);

    cart.removeFromCart1();
    cart.getCartIcon().should("contain", 2);
  });
});

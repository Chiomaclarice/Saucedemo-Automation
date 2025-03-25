import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const login = new Login();
const cart = new Cart();
const checkout = new Checkout();

describe("Perform e2e purchase", () => {
  let userData;

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      userData = data;
      login.visit();
      cy.wait(500);
    });
  });

  it("Add to cart, checkout and confirm order", () => {
    login.getUsernameField().type(userData.validCredentials.username);
    login.getPasswordField().type(userData.validCredentials.password);
    login.getLoginButton().click;

    cart
      .addToCart()
      .should("be.visible")
      .and("contain.text", "Add to cart")
      .click();
    cart.getCartIcon();

    checkout.getCheckoutButton();
    checkout.fillCheckoutDetails("Mary", "Doe", "12346");
    checkout.confirmOrder();
    cy.contains("Thank you for your order").should("be.visible");
  });
});

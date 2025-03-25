class Checkout {
  constructor() {
    this.url = "https://www.saucedemo.com/cart.html";
  }

  visit() {
    cy.visit(this.url);
  }

  getCheckoutButton() {
    return cy.get('[data-test="checkout"]').click();
  }

  fillCheckoutDetails(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  }

  confirmOrder() {
    return cy.get('[data-test="finish"]').click();
  }
}

export default Checkout;

class Cart {
  constructor() {
    this.url = "https://www.saucedemo.com/inventory.html";
  }

  visit() {
    cy.visit(this.url);
  }

  addToCart1() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  addToCart2() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  addToCart3() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  }

  removeFromCart1() {
    return cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
  }

  getCartIcon() {
    return cy.get('[data-test="shopping-cart-link"]');
  }
}

export default Cart;

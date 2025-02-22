class Sorting {
  constructor() {
    this.url = "https://www.saucedemo.com/inventory.html";
  }

  visit() {
    cy.visit(this.url);
  }

  getSortContainer() {
    return cy.get(
      "#header_container > div.header_secondary_container > div > span > select"
    );
  }
  getAtoZItem() {
    return cy.get("#item_4_title_link > div");
  }
  getZtoAitem() {
    return cy.get("#item_3_title_link > div");
  }
  getPriceLowtoHigh() {
    return cy.get("#item_2_title_link > div");
  }
  getPriceHightoLow() {
    return cy.get("#item_5_title_link > div");
  }
}

export default Sorting;

/// <reference types="Cypress" />
const data = require("../fixtures/example.json");
//1. Import the page object
import AutomationPracticePage from "../pageObjects/AutomationPracticePage";

//2. Create an object of the class
const apPage = new AutomationPracticePage();
const searchItem = data.home.searchItem;
//Mocha framework
describe("Automation Practice", function () {
  it("should test that user can visit automation practice page", function () {
    cy.visit(Cypress.env("url"));
    //Chai assertions
    cy.url().should("include", "automationpractice");
  });
  it("should verify that user can use the search field", function () {
    apPage.searchField.clear().type(searchItem);
    apPage.getSearchField().clear().type(searchItem);
  });
  it("should verify that user can use the search field", function () {
    apPage.searchField.clear().type("Women dresses");
  });
});

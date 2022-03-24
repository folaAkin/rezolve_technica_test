// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { createEngagementPage } from "../pageObjects/create-engagement-page";

//custom log in command
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  createEngagementPage.clickOnSignInLink();
  cy.get("#username").should("be.visible").type(email);
  cy.get("#password").should("be.visible").type(password);
  cy.get("[name='action']").contains("Continue").click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

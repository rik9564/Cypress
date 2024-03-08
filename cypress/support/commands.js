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
// Cypress.Commands.add('login', (email, password) => { ... })
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
//const { defineConfig } = require("cypress");

Cypress.Commands.add('ClickOnElement', (element) => {
    var timeoutVal = Cypress.config().timeoutVal
    return cy.Get(element).click({ timeout: timeoutVal })
})

Cypress.Commands.add('WaitForLoadingToBeCompleted', () => {
    var timeoutVal = Cypress.config().timeoutVal
    cy.Get('.k-overlay').should('not.exist', { retry: { timeout: timeoutVal, interval: 250 } });
})

Cypress.Commands.add('SendValue', (element, value) => {
    var timeoutVal = Cypress.config().timeoutVal
    return cy.Get(element).type(value, { timeout: timeoutVal }).should('have.value', value, { timeout: timeoutVal })
})

Cypress.Commands.add('selectDropDownValue', (element, value) => {
    var timeoutVal = Cypress.config().timeoutVal
    cy.Get(element).should('be.enabled', { timeout: timeoutVal }).click({ timeout: timeoutVal })
    cy.Get('li:contains(' + value + ')').click({ timeout: timeoutVal })
})

Cypress.Commands.add('Get', (element) => {
    var timeoutVal = Cypress.config().timeoutVal
    return cy.get(element, { timeout: timeoutVal })
})

Cypress.Commands.add('moveFile', (srcPath, destPath) => {
    return cy.task('moveFile', { srcPath, destPath })
})
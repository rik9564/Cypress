var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');

Given(`I am Logged in to Elements Application`, () => {
    // [Given] Sets up the initial state of the system.
    var baseUrl = Cypress.config().baseUrl
    var username = Cypress.config().username
    var password = Cypress.config().password
    cy.viewport(2160, 1080)
    cy.visit(baseUrl)
    cy.SendValue('#username', username)
    cy.SendValue('#password', password)
    cy.ClickOnElement('[test-id="login-btn-login"]')
});

When(`I Select {string} Application from Application Switch Over`, (App) => {
    // [When] Describes the action or event that triggers the scenario.
    cy.ClickOnElement('[title="Application Switch"]')
    if (App == 'EAM') {
        cy.ClickOnElement('[test-id="menu-ddl-applicationNavigationEAMIcon1"]')
    }
});

When(`I navigated to EAM Main New Transaction Menu`, () => {
    // [When] Describes the action or event that triggers the scenario.
    var timeoutVal = Cypress.config().timeoutVal
    cy.ClickOnElement('[test-id="menu-51"]')
    cy.contains('New Transaction ',{timeout:timeoutVal}).click({timeout:timeoutVal})
});

When(`I Select TC Code as : {string}`, (TCCode) => {
    // [When] Describes the action or event that triggers the scenario.
    cy.selectDropDownValue('[test-id="transaction-select-code"] button', TCCode)
});

When(`I Select Type of Application as : {string}`, (enrollment) => {
    // [When] Describes the action or event that triggers the scenario.
    cy.selectDropDownValue('[test-id="transaction-select-typeOfApplication"] button', enrollment)
});

When(`I Enter FirstName as : {string}`, (firstName) => {
    // [When] Describes the action or event that triggers the scenario.
    cy.SendValue('[test-id="DemographicDetailsFirstName"]', firstName)

});

When(`I Enter LastName as : {string}`, (lastName) => {
    // [When] Describes the action or event that triggers the scenario.
    cy.SendValue('[test-id="DemographicDetailsLastName"]', lastName)
});


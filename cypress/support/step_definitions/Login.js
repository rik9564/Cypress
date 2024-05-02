var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
//const { defineConfig } = require("cypress");

Given(`I am Logged in to Elements Application`, () => {
    // [Given] Sets up the initial state of the system.
    cy.clearAllCookies();
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
    cy.contains('New Transaction ', { timeout: timeoutVal }).click({ timeout: timeoutVal })
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

When('I Enter MBI as : {string}', (MBI) => {
    // Write code here that turns the phrase above into concrete actions
    cy.SendValue('[test-id="DemographicDetailsMBI"]', MBI)
});

When('I Select Plan ID as : {string}', (planID) => {
    // Write code here that turns the phrase above into concrete actions
    cy.selectDropDownValue('[test-id="DemographicDetailsPlanId"] button', planID)
});

When('I Select PBP ID as : {string}', (pbp) => {
    // Write code here that turns the phrase above into concrete actions
    cy.selectDropDownValue('[test-id="DemographicDetailsPbp"] button', pbp)
});

When('I Enter Date of Birth : {string}', (DOB) => {
    // Write code here that turns the phrase above into concrete actions
    let list = DOB.split('/')
    cy.Get('#datepicker-1').clear()
    cy.Get('#datepicker-1').type('{home}').type(list[0]).type(list[1]).type(list[2])
});

When('I Select Gender as : {string}', (Gender) => {
    // Write code here that turns the phrase above into concrete actions
    cy.selectDropDownValue('[test-id="DemographicDetailsSex"] button', Gender)

    
});

When('I am navigated to EAM Reports Page', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.ClickOnElement('[test-id="menu-73"]');
  cy.type('tzhealthacre\tms.install');
});




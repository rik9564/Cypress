var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import * as common from '../ElementsCommon/ElementsCommon'
When('GherkinVar {string} is set to {string}', (Variable, Value) => {
    // Write code here that turns the phrase above into concrete actions
    common.setVariable(Variable, common.generateNewString(Value));
    cy.log(Variable, 'is Set to: ', common.getVariable(Variable));
});
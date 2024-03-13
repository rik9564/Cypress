var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import * as common from '../ElementsCommon/ElementsCommon'
When('GherkinVar {string} is set to {string}', (Variable, Value) => {
    // Write code here that turns the phrase above into concrete actions
    common.setVariable(Variable, common.generateNewString(Value));
    cy.log(Variable, 'is Set to: ', common.getVariable(Variable));
});
Then('I Execute This Query {string} on {string} Database And Verify The Table as Provide:', (Query, DataBase, dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    const MainQuery = common.generateNewString(Query);
    const query = "sqlcmd -S " + '"AZ-TMS-SQL-q6.tzhealthcare.com"' + " -d " + '"' + DataBase + '"' + " -U " + '"' + 'pdmadmin' + '"' + " -P " + '"' + 'pdmrox' + '"' + " -Q " + '"' + MainQuery + '"';
    cy.log(query);
    cy.exec(query).then((result) => {
        debugger
        const data = result.stdout;
        const values = data.split('\r\n');
        let map = {};
        
        for (let index = 0; index < values.length - 2; index++) {
            const element = values[index];
            const elements = element.split(' ');
            if (index === 0) {
                for (let key of elements) {
                    map[key] = null;
                }
            } else if (index > 1) {
                for (let value of elements) {
                    map[key] = value;
                }
            }
        }


    })
});

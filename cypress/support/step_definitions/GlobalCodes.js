var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import * as common from '../ElementsCommon/ElementsCommon';
When('GherkinVar {string} is set to {string}', (Variable, Value) => {
    // Write code here that turns the phrase above into concrete actions
    common.setVariable(Variable, common.generateNewString(Value));
    cy.log(`${Variable} is Set to: ${common.getVariable(Variable)}`);
});
Then('I Execute This Query {string} on {string} Database And Verify The Table as Provide:', (Query, DataBase, dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    const MainQuery = common.generateNewString(Query);
    cy.ExecSQLQuery(MainQuery, DataBase).then((result) => {
        const ActualData = result['recordset'].map(key => Object.values(key).toString());
        const ExpectedData = dataTable.hashes().map(key => Object.values(key).join(','));

        if (ExpectedData.length !== ActualData.length) {
            assert.fail('Data lengths do not match');
        }

        const actualDataHeader = `| ${Object.keys(result['recordset'][0]).join(' | ')} |`;
        cy.log(`\nActual Data:\n${actualDataHeader}\n${ActualData.join('\n')}`);

        // Log ExpectedData in the specified format
        const expectedDataHeader = `| ${Object.keys(dataTable.hashes()[0]).join(' | ')} |`;
        cy.log(`\nExpected Data:\n${expectedDataHeader}\n${ExpectedData.join('\n')}`);

        try {
            assert.deepEqual(ExpectedData, ActualData);
            
        } catch (error) {
            cy.log(`Error: ${error.message}`);
        }
    })

});

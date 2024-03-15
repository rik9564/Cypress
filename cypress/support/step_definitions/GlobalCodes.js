var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import * as common from '../ElementsCommon/ElementsCommon';
When('GherkinVar {string} is set to {string}', (Variable, Value) => {
    // Write code here that turns the phrase above into concrete actions
    common.setVariable(Variable, common.generateNewString(Value));
    cy.log(Variable, 'is Set to: ', common.getVariable(Variable));
});
Then('I Execute This Query {string} on {string} Database And Verify The Table as Provide:', (Query, DataBase, dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    const MainQuery = common.generateNewString(Query);
    cy.ExecSQLQuery(MainQuery, DataBase).then((result) => {
        let ActualData = [];
        let ExpectedData = [];
        for (let key of result['recordset']) {
            ActualData.push(Object.values(key).toString());
        }
        for (let key of dataTable.hashes()) {
            ExpectedData.push(Object.values(key));
        }
        if (ExpectedData.length === ActualData.length) {
            for (let i = 0; i < ExpectedData.length; i++) {
                let ExpectedValueArray = ExpectedData[i];
                let val = "";
                for (let j in ExpectedValueArray) {
                    val += ExpectedValueArray[j].toString();
                    if (j < ExpectedValueArray.length - 1) {
                        val += ',';
                    }
                }
                let ActualValue = ActualData[i].toString();
                assert.equal(val.toString(), ActualValue);
            }
        } else {
            assert.fail();
        }

    });

});


var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import * as common from '../../ElementsCommon/ElementsCommon'

When('I Create and upload an EAF File {string} With the Following Details:', (fileName, dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    const header = Object.keys(dataTable.hashes()[0]);

    // Construct the file content with header and rows
    let fileContent = header.join('\t') + '\n'; // Join headers with tab separators

    for (const row of dataTable.hashes()) {
        fileContent += Object.values(common.generateNewString(row)).join('\t') + '\n';
    }

    // Specify the desired file path
    const filePath = 'cypress\\downloads\\' + common.generateNewString(fileName);
    const destLoc = Cypress.config().TMSSharedPath;

    // Write the content to the file
    cy.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log('EAF data saved to:', filePath);
    });
    cy.copyFile(filePath, destLoc)


});

Then('Verify the Job is Set to {string} for {string} as File Name as {string} on Job Processing Status Page', (Status, fileType, fileName) => {
    // Write code here that turns the phrase above into concrete actions
    const FileName = common.generateNewString(fileName);
    const filePath = Cypress.config().TMSSharedPath + FileName
    const filePath1 = Cypress.config().TMSSharedPath + 'InProgress/' + FileName
    const filePath2 = Cypress.config().TMSSharedPath + 'Processed/' + FileName
    cy.ClickOnElement('[title="Job Processing Status"]');
    cy.selectDropDownValue('[test-id="jobProcessingStatus-txt-ddlJobName"] button', fileType);

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const formattedDate = mm + '/' + dd + '/' + yyyy;

    cy.passDate('#datepicker-1', formattedDate);

    cy.then(() => {
        function checkFileExists() {
            cy.exec('powershell test-path ' + filePath).then((result) => {
                const fileExists = result.stdout.trim() === 'True';
                if (fileExists) {
                    // File found, wait for 10 sec and continue
                    cy.wait(20000).then(checkFileExists);

                } else {
                    cy.log('File does not Exsist at: ' + filePath);
                    function checkFileExistsInProgress() {
                        cy.exec('powershell test-path ' + filePath1).then((result) => {
                            const fileExists1 = result.stdout.trim() === 'True';
                            if (fileExists1) {
                                // File found, wait for 10 sec and continue
                                cy.wait(20000).then(checkFileExistsInProgress);

                            } else {
                                cy.log('File does not Exsist at: ' + filePath1);
                                function checkFileExistsProcessed() {
                                    cy.exec('powershell test-path ' + filePath2).then((result) => {
                                        const fileExists2 = result.stdout.trim() === 'True';
                                        if (fileExists2) {
                                            // File found, wait for 10 sec and continue
                                            cy.log('File Exist at: ' + filePath2);
                                            return;
                                        } else {
                                            cy.log('File does not Exist at: ' + filePath2);
                                            expect(false).to.be.true;
                                        }
                                    });
                                }
                                checkFileExistsProcessed();
                                return;
                            }
                        })
                    }
                    checkFileExistsInProgress();

                    return;

                }
            });
        }

        checkFileExists();
    });
    cy.ClickOnElement('#btnSearch');
    cy.ClickOnElement('tr:nth-child(1)>td:nth-child(1)>[title="Expand Details"]');
    cy.Get('td:contains(' + FileName + ')+td').invoke('text').then((text) => {
        assert.deepEqual(text, Status);
    })
})


var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('I Create and upload an EAF File {string} With the Following Details:', (fileName, dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    const header = Object.keys(dataTable.hashes()[0]);

    // Construct the file content with header and rows
    let fileContent = header.join('\t') + '\n'; // Join headers with tab separators

    for (const row of dataTable.hashes()) {
        fileContent += Object.values(row).join('\t') + '\n';
    }

    // Specify the desired file path
    const filePath = 'cypress\\downloads\\' + fileName;
    const destLoc = Cypress.config().TMSSharedPath;

    // Write the content to the file
    cy.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log('EAF data saved to:', filePath);
    });
    cy.copyFile(filePath, destLoc)


});

Then('Verify the Job is Set to {string} for File Name as {string} on Job Processing Status Page', (Status, FileName) => {
    // Write code here that turns the phrase above into concrete actions
    const filePath = Cypress.config().TMSSharedPath + FileName
    const filePath1 = Cypress.config().TMSSharedPath + 'InProgress/' + FileName
    const filePath2 = Cypress.config().TMSSharedPath + 'Processed/' + FileName
    const filePath3 = Cypress.config().TMSSharedPath + 'Failed/' + FileName

    cy.then(() => {
        function checkFileExists() {
            cy.exec('powershell test-path ' + filePath).then((result) => {
                const fileExists = result.stdout.trim() === 'True';
                if (fileExists) {
                    // File found, wait for 10 sec and continue
                    cy.wait(5000).then(checkFileExists);

                } else {
                    cy.log('File does not Exsist at: ' + filePath);
                    function checkFileExistsInProgress() {
                        cy.exec('powershell test-path ' + filePath1).then((result) => {
                            const fileExists1 = result.stdout.trim() === 'True';
                            if (fileExists1) {
                                // File found, wait for 10 sec and continue
                                cy.wait(5000).then(checkFileExistsInProgress);

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

})



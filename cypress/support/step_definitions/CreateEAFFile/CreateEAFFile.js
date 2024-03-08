
var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');

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

    // Write the content to the file
    cy.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log('EAF data saved to:', filePath);
    });
    cy.moveFile(filePath,Cypress.config().TMSSharedPath)

    
});

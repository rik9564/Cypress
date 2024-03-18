const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const sql = require('mssql');
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
 await addCucumberPreprocessorPlugin(on, config);

 on("file:preprocessor", webpack({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
 }));

 on('task', {
    async executeSqlQuery({ query, connectionString }) {
      try {
        await sql.connect(connectionString);
        const result = await sql.query(query);
        return result;
      } catch (err) {
        throw err; // Let Cypress handle the error
      }
    }
 });

 return config;
}

module.exports = defineConfig({
 e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://tms.az-tms-app-q6.tzhealthcare.com/tms/',
    timeoutVal: 3000000,
    username: 'tmsadmin',
    password: 'Welcome@123',
    TMSSharedPath: '//az-tms-app-q6.tzhealthcare.com/TMSShareFolder/TMS/EAM/Input/',
    setupNodeEvents,
 },
});
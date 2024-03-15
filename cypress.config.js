const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const fs = require('fs');
const sql = require('mssql');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
//const { result } = require("cypress/types/lodash");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
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
    })
  );
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

  // Move the previous module.exports block here
  // Make sure to return the config object as it might have been modified by the plugin.
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
const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const fs = require('fs');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

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

  // Move the previous module.exports block here
  on("task", {
     moveFile({ srcPath, destPath }) {
      try {
        fs.renameSync(srcPath, destPath);
        return true;
      } catch (error) {
        console.log("Error occurred while moving the file:", error);
        throw error;
      }
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://tms.az-tms-app-q1.tzhealthcare.com/tms/',
    timeoutVal: 3000000,
    username: 'tmsadmin',
    password: 'Welcome@123',
    TMSSharedPath: '//az-tms-app-Q1.tzhealthcare.com/C$/TMSSharedFolder/TMS/EAM/Input/',
    setupNodeEvents,
  },
});
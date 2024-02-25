 Cypress BDD Framework Setup
===========================

This repository contains an example setup for a Behavior Driven Development (BDD) testing framework using Cypress and the Cucumber preprocessor. The project uses `cypress-cucumber-preprocessor` package created by `badeball`. It also includes Webpack configuration to handle TypeScript files.

Getting Started
---------------

To start working with this framework, follow these simple steps:

### Prerequisites

* Node.js installed in your system
* A code editor such as Visual Studio Code or Sublime Text

### Installation

1. Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/{username}/{repository}.git
cd {repository}
```
Replace `{username}` and `{repository}` with your GitHub username and the name of the cloned repository respectively.

2. Run `npm install` to install all dependencies listed in `package.json`.

### Configuration

The main configuration file is located at `cypress.config.js`. Here's what you need to know about it:

#### Base URL & Timeout Settings

Base URL, timeouts, user credentials, and other settings are specified under the `e2e` block in the `cypress.config.js` file. Modify them according to your needs. For instance, if you want to change the base URL, modify it as follows:
```javascript
baseUrl:'<your desired base url>',
```
#### Feature Files

Place your Gherkin feature files inside the `features` directory. Ensure that they end with the `.feature` extension.

Example: `features/login.feature`

#### Step Definitions

Create a corresponding JavaScript file named `steps.js` alongside every feature file in a separate `step_definition` directory. Name it exactly similar to its parent feature file but replace `.feature` with `.steps.js`. Inside this file, write step definitions implementing functionality described in the feature files.

Example: `features/step_definitions/login.steps.js`

Running Tests
-------------

Run tests with the following command:

```bash
npx cypress open
```

Or execute headless mode directly via the terminal without opening the browser interface:

```bash
npx cypress run
```

Reporting
---------

JSON report generation has already been configured thanks to the `cypress-cucumber-preprocessor` library. To view detailed HTML reports, you can utilize tools like [`cucumber-html-reporter-generator`](https://www.npmjs.com/package/cucumber-html-reporter-generator).

Contributions
------------

We welcome contributions from everyone! Please submit Pull Requests against the `development` branch. Before submitting any changes, ensure that existing unit tests pass and include new ones whenever necessary.

License
-------

[MIT License](LICENSE)

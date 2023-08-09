const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,
  watchForFileChanges: false,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // testIsolation:false,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    includeShadowDom: true,
    experimentalRunAllSpecs: true,
    testIsolation: true,
  },
});

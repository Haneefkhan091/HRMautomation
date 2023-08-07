const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio:true,
  watchForFileChanges:false,
  pageLoadTimeout:10000,
  chromeWebSecurity:false,
  
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    testIsolation:false,
    baseUrl:'https://opensource-demo.orangehrmlive.com',
  },
});

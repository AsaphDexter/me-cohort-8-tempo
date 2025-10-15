const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/login',
    defaultCommandTimeout: 10000,
    viewportHeight : 960,
    viewportWidth: 1580,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

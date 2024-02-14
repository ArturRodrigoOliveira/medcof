require("dotenv").config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: process.env.BASE_URL,
    video: false,
    viewportHeight: 964,
    viewportWidth: 1314,
  }
});

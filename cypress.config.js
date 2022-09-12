const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Define o tamanho da viewport
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: 'https://buger-eats-qa.vercel.app'
  },
  
  
});

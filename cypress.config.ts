import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

reporterOptions: {
    reportDir: "cypress/reports", // where JSON + HTML will go
    charts: true,
    overwrite: false,             // keep each run's JSON (we'll merge)
    html: false,                  // turn off per-spec HTML
    json: true                    // generate per-spec JSON
  }
});

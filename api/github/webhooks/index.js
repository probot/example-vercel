const { createNodeMiddleware, createProbot } = require("probot");

const app = require("../../../app");
const probot = createProbot({
  defaults: {
    webhookPath: "/api/github/webhooks",
  },
});

module.exports = createNodeMiddleware(app, { probot });

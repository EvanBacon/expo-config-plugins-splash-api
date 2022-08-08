require("ts-node/register");

const { withSplash } = require("./withSplash");

module.exports = ({ config }) => {
  config.plugins.push(withSplash);
  return config;
};

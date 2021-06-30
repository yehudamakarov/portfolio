const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: 'gatsby-config', // or wherever you would like to store your gatsby-config files
  projectRoot: __dirname,
});
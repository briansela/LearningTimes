const merge = require('webpack-merge');
const sharedBaseConfig = require('../shared/base.config');
const resolve = require('path').resolve;

const pathToRoot = resolve(__dirname, "../../");

module.exports = merge(sharedBaseConfig, {
  entry: {
    app: `${pathToRoot}/src/client.js`,
  },
  output: {
    path: `${pathToRoot}/dist/client`,
    filename: 'app.js',
    publicPath: '../'
  },
});
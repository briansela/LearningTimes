const merge = require('webpack-merge')
const resolve = require('path').resolve;
const sharedBaseConfig = require('../shared/base.config');
const moduleTests = require('../shared/moduleTests');
const webpackNodeExternals = require('webpack-node-externals');

const pathToRoot = resolve(__dirname, '../../');

module.exports = merge.smart(sharedBaseConfig, {
  entry: {
    app: `${pathToRoot}/src/server.js`
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
        {
            test: moduleTests.javaScript,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: moduleTests.image,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    emitFile: false,
                }
            }
        },
      ]
    },
  target: 'node',
  output: {
    filename: '[name].bundle.js',
    library: 'app',
    libraryTarget: 'commonjs2',
    path: `${pathToRoot}/dist/server`,
    publicPath: '../',
  }
});
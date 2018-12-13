const clientBaseConfig = require('./base.config');
const moduleTests = require('../shared/moduleTests');
const merge = require('webpack-merge')

module.exports = merge.smart(clientBaseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      },
    ],
  },
});
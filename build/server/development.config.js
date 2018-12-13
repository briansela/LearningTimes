const merge = require('webpack-merge')

const serverBaseConfig = require('./base.config');

module.exports = merge.smart(serverBaseConfig, {
  mode: 'development',
});
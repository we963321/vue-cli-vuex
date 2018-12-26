'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_URL: '"http://192.168.0.11:8080/"',
  VUE_APP_API_KEY: '"base64:AXzWSoqj+cp5tV4Ob8F+8m+4zx1BAXDQ9YicfTOPE6I="'
})

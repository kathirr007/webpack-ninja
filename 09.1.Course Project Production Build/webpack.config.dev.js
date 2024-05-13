const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode:'development',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader', options: { sourceMap: true }},
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({}),
  ]
})

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require('glob')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

const purgePath = {
  src: path.resolve(__dirname, 'src')
}

module.exports = merge(commonConfig, {
  mode:'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCSSExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'sass-loader', options: { sourceMap: true }},
        ]
      }
    ]
  },
  plugins: [
    new PurgeCSSPlugin({ // Purge/remove unused css
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
      safelist: ['unused-style'] // ignore list
    }),
    new CopyPlugin({ // copy assets from src to dist or target folders
      patterns: [
        {
          from: 'assets/images/**/*',
          to: path.resolve(__dirname, 'dist'),
          context: path.resolve(__dirname, 'src'),
        }
      ]
    }),
    new MiniCSSExtractPlugin({})
  ]
})

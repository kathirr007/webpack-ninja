const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // {loader: 'style-loader'},
          {loader: MiniCSSExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'sass-loader', options: { sourceMap: true }},
        ]
      },
      {
        test: /\.(png|jpg|svg|webp|gif|ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ // Shimming
      mnt: 'moment',
      _: 'lodash',
      $: 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'],
      inject: true,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pages/courses.html'),
      chunks: ['courses'],
      inject: true,
      filename: 'courses.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/images/**/*',
          to: path.resolve(__dirname, 'dist'),
          context: path.resolve(__dirname, 'src'),
        }
      ]
    }),
    // new BundleAnalyzerPlugin({}),
    new MiniCSSExtractPlugin({})
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

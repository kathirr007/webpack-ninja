const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: { modules: true }},
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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'],
      inject: true,
      filename: 'index.html'
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pages/courses.html'),
      chunks: ['courses'],
      inject: true,
      filename: 'courses.html'
    })
  ]
}

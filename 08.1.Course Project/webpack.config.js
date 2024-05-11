const path = require('path')

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
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: { modules: true }},
          {loader: 'sass-loader', options: { sourceMap: true }},
        ]
      }
    ]
  }
}

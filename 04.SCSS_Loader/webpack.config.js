const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: { modules: true }},
          {loader: 'sass-loader', options: { sourceMap: true } },
        ]
      }
    ]
  }
}

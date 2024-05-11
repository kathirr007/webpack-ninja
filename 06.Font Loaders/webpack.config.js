const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[hash][ext]",
    clean: true,
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
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp)/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2)/,
        type: 'asset/resource'
      }
    ]
  }
}

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const EslintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // test: /.([jt]sx?)$/,
        test: /.([jt]sx?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults'
                  }
                ],
                '@babel/preset-react',
              ],
            },
          },
          /* {
            loader: 'eslint-loader',
            options: { fix: true }
          } */
        ]
      },
      {
        test:/.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCSSExtractPlugin.loader},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader', options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]]
              }
            }
          },
          {loader: 'sass-loader', options: { sourceMap: true }},
        ]
      },
      {
        test: /.(jpeg|jpg|png|gif|svg|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    // new EslintPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new MiniCSSExtractPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

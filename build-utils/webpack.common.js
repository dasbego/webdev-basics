const commonPaths = require("./common-paths");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[chunkhash].bundle.js",
    path: commonPaths.outputPath
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Rocking app',
      template: './src/index.html',
      inject: 'body',
      favicon: './src/assets/img/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /[\.png|\.ico]$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules\//,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config;

const webpack = require("webpack")

module.exports = {
  devtool: "source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      exclude: /node_modules(?!\/webpack-dev-server)/,
    }]
  }
}

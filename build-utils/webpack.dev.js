module.exports = {
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      exclude: /node_modules(?!\/webpack-dev-server)/,
    }]
  }
}

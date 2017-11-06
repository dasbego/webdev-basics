const commonPaths = require("./common-paths");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: commonPaths.outputPath
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config;

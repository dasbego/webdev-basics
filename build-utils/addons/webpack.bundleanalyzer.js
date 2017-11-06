const webpackAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  plugins: [
    new webpackAnalyzerPlugin()
  ]
}
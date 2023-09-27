const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @returns {import('webpack').Configuration} */
module.exports = ({ WEBPACK_SERVE }) => ({
  mode: WEBPACK_SERVE ? "development" : "production",
  entry: "./src/main.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  devServer: {
    port: 3000,
    hot: true,
  },
  stats: false,
  optimization: {
    runtimeChunk: true,
    splitChunks: { chunks: "all" },
  },
});

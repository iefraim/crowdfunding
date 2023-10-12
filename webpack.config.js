const path = require("path");

module.exports = {
  entry: "./src/app.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset",
      },
      {
        test: /\.php$/,
        loader: "webpack-php-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 8000,
  },
};

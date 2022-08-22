const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

const config = {
  entry: "./src/q.ts",
  mode: "production",
  output: {
    filename: "q.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /tests/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html", ".css"],
  },
  devServer: {
    static: "./public",
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};

module.exports = (env, args) => {
  if (args.mode !== "development") {
    config.plugins.push(new GenerateSW({ clientsClaim: true, skipWaiting: true, cleanupOutdatedCaches: true }));
  }
  return config;
};

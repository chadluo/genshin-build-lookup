import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { GenerateSW } from "workbox-webpack-plugin";

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
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
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html", ".css"],
  },
  devServer: {
    client: {
      reconnect: false,
    },
    open: false,
    port: 3000,
    static: "./public",
  },
  plugins: ([new HtmlWebpackPlugin({ template: "./src/index.html" })] as any[]).concat(
    devMode
      ? []
      : [
          new MiniCssExtractPlugin(),
          new GenerateSW({ clientsClaim: true, skipWaiting: true, cleanupOutdatedCaches: true }),
        ]
  ),
};

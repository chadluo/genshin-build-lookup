const path = require("path");

module.exports = {
  entry: "./src/q.ts",
  mode: "development",
  output: {
    filename: "q.js",
    path: path.resolve(__dirname, "public"),
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
};

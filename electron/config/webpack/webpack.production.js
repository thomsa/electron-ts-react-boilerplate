const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    entry: [path.join(__dirname, "../../main.ts")],
    externals: [nodeExternals({})],
    mode: "production",
    plugins: [new CleanWebpackPlugin(), new Dotenv()]
});

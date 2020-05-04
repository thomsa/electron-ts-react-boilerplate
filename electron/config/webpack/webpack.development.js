const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge.smart(common, {
    devtool: "inline-source-map",
    entry: ["webpack/hot/poll?1000", "../../main.ts"],
    externals: [
        nodeExternals({
            whitelist: ["webpack/hot/poll?1000"]
        })
    ],
    mode: "development",
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true
});

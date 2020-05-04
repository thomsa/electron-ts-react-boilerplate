const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, "node_modules")],
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../../", "dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, "../../", "tsconfig.json")
            })
        ]
    },
    target: "electron-main"
};

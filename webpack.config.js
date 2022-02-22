const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    // devtool: "source-map",
    module: {
      rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node-modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                cacheCompression: false
            }
        },
        {
            test: /\.js|\.ts$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /css\*\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.less$/,
            use: ["style-loader", "css-loader", { loader: "less-loader" }],
        },
      ]
    },
    resolve:{
        extensions:['*','.js','.ts','.tsx']
    },
    devServer: {
        hot: true,
        contentBase: "./public",
        compress: true,
        port: 8080,
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        })
    ]
  };
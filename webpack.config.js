const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
  
module.exports = {
    mode: "production",

    entry: "./src/index.tsx",

    output: {
      path: `${__dirname}/dist`,
      filename: "main.js"
    },
    
    devServer: {
        port: 8000,
        open: true
    },

    module: {

      rules: [

        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },

        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }

      ]

    },

    plugins: [
        htmlWebpackPlugin
    ],

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    }
  };
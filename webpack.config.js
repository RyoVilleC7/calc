const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
  
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/index.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "main.js"
    },
    
    devServer: {
        historyApiFallback: true,
        port: 8000,
        open: true
    },

    module: {
      rules: [

        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
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

    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    }
  };
// var HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    // new HtmlwebpackPlugin({
    //   title: 'Webpack-demos',
    //   filename: 'index.html'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "fonts/[name]-[hash:5].[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            }
          }
        ]
      }
    ]

  }
}
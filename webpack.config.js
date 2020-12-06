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
      }
    ]

  }
}
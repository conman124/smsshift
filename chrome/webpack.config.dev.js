const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './js/background.js',
    main: './js/main.js'
  },
  output: {
    path: __dirname + '/build/js',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: __dirname + '/node_modules',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['background'],
      filename: '../html/background.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: "SMSShift",
      chunks: ['main'],
      filename: '../html/main.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'manifest.json',
        to: '../'
      }
    ])
  ]
}

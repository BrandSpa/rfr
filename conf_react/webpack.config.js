'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  watch: true,
  entry: {
    bundle: '../client/components-react/app.js'
  },
  output: {
  	path:  path.join(__dirname, '/js'),
    filename: '[name].js'
  },
  module: {
  	loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader' 
			}
		]
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "/js"),
    port: 8000,
    compress: true
  }
};


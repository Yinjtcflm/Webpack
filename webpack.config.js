const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      { 
        test: /\.css$/i, 
        use:  ['style-loader','css-loader'],
    }
    ]
  }
};

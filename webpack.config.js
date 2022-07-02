var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const { Template } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title:"晶晶的网站",
    template :'src/assets/index.html'
  })],
  module: {
    rules: [
      { 
        test: /\.css$/i, 
        use:  ['style-loader','css-loader'],
    },
    ],
  },
};

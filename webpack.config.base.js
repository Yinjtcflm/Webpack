const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title:"晶晶的网站",
    template :'src/assets/index.html'
  })
],
};

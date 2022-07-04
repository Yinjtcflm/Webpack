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
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    },
    {
      test: /\.styl$/,
      loader: ['style-loader','css-loader','stylus-loader'], 
    },
    {
      test: /\.less$/i,
      loader:['style-loader','css-loader','less-loader'],
    },
    {
      test: /\.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader:"sass-loader",
          options:{
            implementation:require('dart-sass')
          }
        },
      ],
    },
  ],
},
};

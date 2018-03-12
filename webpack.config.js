const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: ['whatwg-fetch',"./js/app.jsx"],
  output: {
    path: path.resolve("dist"),
    filename: "out.js"
  },
  devServer: {
	   hot: true,
    inline: true,
    contentBase: './',
    port: 3001
  },
  
  watch: true,
  module: {
    rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
		    plugins: ['transform-class-properties']
      }
    },
    {
      test: /\.css$/,
      loader:'style-loader'
    },
	{
      test: /\.css$/,
      loader:'css-loader',
	  options: { url: false }
    },

    { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "url-loader?limit=10000&minetype=application/font-woff" 
    },
    { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: "file-loader" 
    }



    ]
  }
}



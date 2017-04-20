//dependencies for configuring webpack
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }, //end of output object: this is what webpack spits out
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      }
    ] //end of rules array
  }, //end of module object
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
} //end of config object
module.exports = config

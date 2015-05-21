var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    "radium-bootstrap": path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    // TODO minimized and normal builds, see https://github.com/react-bootstrap/react-bootstrap/blob/master/webpack/webpack.config.js
    filename: '[name].min.js',
    library: "RadiumBootstrap",
    libraryTarget: "umd"
  },
  // Don't include dependencies in the build
  externals: [
    // Every non-relative module is external
    // abc -> require("abc")
    /^[a-z\-0-9_]/,
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}

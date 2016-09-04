var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    filename: 'quickpick-bundle.js',
    publicPath: '/',
    path: __dirname + '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

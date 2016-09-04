var path = require('path');

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

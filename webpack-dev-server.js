var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');
var port = 3000;

// add hot module replacement config entries
config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];
config.entry.unshift(
  'webpack-dev-server/client?http://0.0.0.0:' + port, // WebpackDevServer host and port
  'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
);

delete config.devtool;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:' + port + '/');
});

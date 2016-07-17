
var path = require('path'),
    webpack = require('webpack'),
    isDev = process.argv.indexOf('--production') == -1;

var plugins = [
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify('production')
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
];

if(!isDev) {
  plugins.unshift(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: isDev ? '[name].bundle.js' : '[name].[chunkhash].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel?cacheDirectory'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    modulesDirectories: ['node_modules']
  },
  devtool: '#source-map',
  bail: true,
  debug: true/*,
  watch: isDev*/
};

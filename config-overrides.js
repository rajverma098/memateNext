const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "process": false,
    "stream": require.resolve("stream-browserify"),
    "util": require.resolve("util/"),
    "buffer": require.resolve("buffer/")
  };
  
  // config.plugins = [
  //   ...config.plugins,
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  //     'process.env': JSON.stringify(process.env)
  //   })
  // ];
  
  return config;
}; 
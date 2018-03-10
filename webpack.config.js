const path = require('path');
const webpack = require('webpack');

const publidDir = `${__dirname}/public`;

module.exports = {
  mode: 'development',
  entry: {
    index: [
      path.resolve(__dirname, 'src/index.jsx'),
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: publidDir,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publidDir,
  },
};

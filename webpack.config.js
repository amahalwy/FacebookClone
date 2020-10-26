const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './frontend/facebook_clone.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.REACT_APP_S3_BUCKET': JSON.stringify(process.env.REACT_APP_S3_BUCKET),
      'process.env.REACT_APP_AWS_ACCESS_KEY_ID': JSON.stringify(process.env.REACT_APP_AWS_ACCESS_KEY_ID),
      'process.env.REACT_APP_AWS_SECRET_ACCESS_KEY': JSON.stringify(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY)
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  externals: ["fs"],
  
};


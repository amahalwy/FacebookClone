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
      'process.env.REACT_APP_S3_BUCKET_TOKEN': JSON.stringify(process.env.REACT_APP_S3_BUCKET_TOKEN),
      'process.env.REACT_APP_AWS_ACCESS_ID_TOKEN': JSON.stringify(process.env.REACT_APP_AWS_ACCESS_ID_TOKEN),
      'process.env.REACT_APP_S3_BUCKET_TOKEN': JSON.stringify(process.env.REACT_APP_S3_BUCKET_TOKEN)
    }),
    // new dotenv()
    // new dotenv({
    //   path: './.env', // Path to .env file (this is the default)
    //   safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    //   allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    //   systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    //   silent: true, // hide any errors
    //   defaults: false // load '.env.defaults' as the default values if empty.
    // })
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


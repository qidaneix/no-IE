const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'noIE',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  }
};

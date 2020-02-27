const path = require('path');

const nodeConfig = {
  entry: './src/com/atomgraph/linkeddatahub/util/URLBuilder.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  target: 'node',
  output: {
    filename: 'URLBuilder.node.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const webConfig = {
  entry: './src/com/atomgraph/linkeddatahub/util/URLBuilder.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    library: ["URLBuilder"],
    libraryTarget: "window",
    filename: 'URLBuilder.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = [ nodeConfig, webConfig ];
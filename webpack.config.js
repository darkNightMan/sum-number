
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'sum-number': './src/index.js',
    'sum-mumber.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'sumNuber',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js/,
      })
    ]
  }
}
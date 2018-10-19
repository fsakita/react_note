const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPluginConfig = require('html-webpack-plugin')

const APP_DIR = path.resolve(__dirname, '../src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

var config = {
  mode: 'development',
  entry: ['babel-polyfill', APP_DIR + '/index.js', 'xlsx', 'file-saver'],
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      actions: APP_DIR + '/actions',
      actionTypes: APP_DIR + '/actionTypes',
      app: APP_DIR,
      components: APP_DIR + '/components',
      services: APP_DIR + '/services',
      stores: APP_DIR + '/stores',
      utils: APP_DIR + '/utils',
      strings: APP_DIR + '/config/strings',
      views: APP_DIR + '/views'
    }
  },
  devServer: {
    compress: true,
    contentBase: './',
    publicPath: '/',
    hot: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      },
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      },
      {
        test: /\.(css|less)$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=800000'
      }
    ]
  },
  node: {fs: 'empty'},
  externals: [
    {'./cptable': 'var cptable'},
    {'./jszip': 'jszip'}
  ],
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPluginConfig({
      filename: 'index.html',
      template: APP_DIR + '/index.html',
      inject: 'body',
      hash: true,
      favicon: APP_DIR + '/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config

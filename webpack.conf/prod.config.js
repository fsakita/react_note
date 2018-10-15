const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPLuginConfig = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const APP_DIR = path.resolve(__dirname, '../src')
const BUILD_DIR = path.resolve(__dirname, '../build')

var config = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.[hash].js',
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    alias: {
      actions: APP_DIR + '/actions',
      actionTypes: APP_DIR + '/actionTypes',
      app: APP_DIR,
      components: APP_DIR + '/components',
      services: APP_DIR + '/services',
      stores: APP_DIR + '/stores',
      views: APP_DIR + '/views'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.js/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=800000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPLuginConfig({
      filename: 'index.html',
      template: APP_DIR + '/index.html',
      inject: 'body',
      hash: true,
      favicon: APP_DIR + '/favicon.ico'
    }),
    new UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    })
  ]
}

module.exports = config

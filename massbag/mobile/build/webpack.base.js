'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postcss = [
  require('autoprefixer')(),
  require('precss')
]

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  browserlist: ['last 2 versions', 'ie > 8'],
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ]
  },
  postcss,
  vue: {
    loaders: {
      //  css: ExtractTextPlugin.extract('vue-style-loader', 'style-loader', 'css-loader')
    },
    postcss
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'mobile',
      template: __dirname + '/index.html',
      filename: '../index.html'
    })
  ]}

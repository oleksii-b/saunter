const ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  merge = require('webpack-merge'),
  path = require('path');

const bundleFileName = 'bundle.js',
  cssLoaders = [
    {
      loader: 'css-loader'
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: [
          autoprefixer({
            browsers: [
              'ie >= 8',
              'last 3 version'
            ]
          })
        ]
      }
    }
  ];


module.exports = (env) => {
  const common = {
    entry: [
      'babel-polyfill',
      'index.js'
    ],

    output: {
      path: path.join(__dirname, '/build'),
      publicPath: (env === 'build') ? '' : '/',
      filename: (env === 'build') ? `js/${bundleFileName}` : bundleFileName
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html'
      })
    ],

    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.css', '.less']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }, {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          exclude: /(node_modules)?!(\/bootstrap)/,
          loader: (env === 'build') ? 'url-loader?limit=1024&name=/fonts/[name].[ext]' : 'file-loader'
        }
      ]
    }
  };

  switch (env) {
    case 'dev':
      return merge([
        common,
        {
          devServer: {
            historyApiFallback: true,
            port: 8800
          },

          devtool: 'inline-source-map',

          module: {
            rules: [
              {
                test: /\.css$/,
                exclude: /(node_modules)?!(\/bootstrap)/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  ...cssLoaders
                ]
              }, {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  ...cssLoaders,
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: true
                    }
                  }
                ]
              }
            ]
          }
        }
      ]);
    case 'build':
      return merge([
        common,
        {
          plugins: [
            new ExtractTextPlugin('css/[name].css')
          ],

          module: {
            rules: [
              {
                test: /\.css$/,
                exclude: /(node_modules)?!(\/bootstrap)/,
                use: ExtractTextPlugin.extract({
                  publicPath: '../',
                  fallback: 'style-loader',
                  use: [...cssLoaders]
                })
              }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  publicPath: '../',
                  fallback: 'style-loader',
                  use: [
                    ...cssLoaders,
                    {
                      loader: 'less-loader',
                      options: {
                        sourceMap: true
                      }
                    }
                  ]
                })
              }
            ]
          }
        }
      ]);
  }
};

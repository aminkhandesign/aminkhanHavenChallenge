
const path = require('path')


module.exports = {
   entry : './src/index.js',
   output: {
     path:__dirname+'/dist',
   },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080
      },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    }
  };
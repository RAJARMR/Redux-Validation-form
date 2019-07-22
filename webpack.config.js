var config = {
    entry: './main.js',
    mode:'development',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8008
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;
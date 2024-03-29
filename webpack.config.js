const path = require('path');

module.exports = {

    mode: 'development',
    entry: './js/script.js',
    output: {
        filename: 'bunde.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,

    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader?optional[]=runtime',
              options: {
                presets: [
                  ["@babel/env", {
                    targets: {
                      edge: "17",
                      firefox: "60",
                      chrome: "67",
                      safari: "11.1",
                      ie: "11"
                    }
                  }]
                ],
                
                plugins: ["es6-promise"]
                  
              }
            }
          }
        ]
      }
};
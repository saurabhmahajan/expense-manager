const path = require('path');
const {AureliaPlugin} = require('aurelia-webpack-plugin');

module.exports = {
    entry: 'aurelia-bootstrapper',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },
    
    resolve: {
        extensions: [".js"],
        modules: ["src", "node_modules"].map(x => path.resolve(x)),
      },

    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: ['node_modules'],
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins:[
        new AureliaPlugin({includeAll: "src"})
    ]
};
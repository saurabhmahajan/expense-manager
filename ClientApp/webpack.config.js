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
        modules: ["src", "node_modules"],
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
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'dist'
                    }
                }]
            }
        ]
    },

    plugins:[
        new AureliaPlugin({includeAll: "src"})
    ]
};
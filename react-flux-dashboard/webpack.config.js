var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:3002',
        'webpack/hot/only-dev-server',
        './js/index',
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'js')
            },
            {
                test: /\.s?css$/,
                loader: "style!css!sass",
                include: path.join(__dirname, 'css')
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

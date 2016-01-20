var path = require('path');
var webpack = require('webpack');
var APP_PATH=path.join(__dirname, 'src');
module.exports = {
    entry: {
        app:APP_PATH,
        vendors: ['react','redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            },
            { test: /\.less$/, loader: "style!css!less" },
            { test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader : 'url?prefix=font/&limit=10000'}
        ]
    },
    plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

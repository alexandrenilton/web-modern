const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    /* mode: 'development', production (mimifica etc)*/
    mode: modoDev ? 'development' : 'production',

    entry: './src/main.js',

    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },

    /*configurando o webpack-dev-server */
    devServer: {
        contentBase: "./public",
        port: 9000
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],

    optimization : {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({}) /*nenhuma configuração extra.. */
        ]
    },

    module: {
        rules: [{
            test: /\.s?[ac]ss$/, // ex reg para pegar sass e scss kk
            use: [
                MiniCssExtractPlugin.loader, // esse plugin, conflita com o de baixo 
                // 'style-loader',  //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()..
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/, 
            use: ['file-loader']
        }]
    }
}
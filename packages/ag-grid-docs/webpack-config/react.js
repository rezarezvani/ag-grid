const merge = require('webpack-merge');
const common = require('./common');

const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    entry: {
        'main': './src/_assets/ts/ag-grid-react.ts'
    },

    output: {
        filename: '[name].js',
        library: ['agGrid'],
        libraryTarget: 'umd',
        publicPath: '/'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'ag-grid-community': 'ag-grid-community',
        'ag-grid-community/main': 'ag-grid-community'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new webpack.NamedModulesPlugin(), 
        new webpack.HotModuleReplacementPlugin()
    ]
});

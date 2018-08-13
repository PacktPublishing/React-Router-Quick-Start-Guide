import path from 'path';
import webpack from 'webpack';
import nodemonPlugin from 'nodemon-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
export default {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: false
        }),
        new nodemonPlugin()
    ]
}

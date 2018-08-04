import path from 'path';
import webpack from 'webpack';

export default {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, './dist/public'),
        filename: 'bundle.js',
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
            __isBrowser__: "true"
        })
    ]
}
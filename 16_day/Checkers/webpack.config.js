const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './src'),
        filename: './bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015', 'es2016', 'stage-0'] }
                    }
                ]
            }
        ]
    }
};
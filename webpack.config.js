const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // path: path.join(__dirname, 'dist'),
        path: path.join(__dirname, '../demo/src/main/resources/static/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
};

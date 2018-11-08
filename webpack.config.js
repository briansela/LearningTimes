module.exports = {
    mode: 'development',
    entry: {
        app: [
            './src/client.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
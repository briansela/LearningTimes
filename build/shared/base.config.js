const moduleTests = require('./moduleTests')
module.exports = {
    module: {
        rules: [
            {
                test: moduleTests.css,
                use: [ 'style-loader', 'css-loader' ],
            }
        ]
    }
}
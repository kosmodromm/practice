const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './Covid-dashboard/components/script.js'),
    },
    output: {
        path: path.resolve(__dirname, './Covid-dashboard/scripts/'),
        filename: 'main.js',
        library: 'global'
    },
    devtool: 'eval',
    
}   
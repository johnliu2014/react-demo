const path = require('path');

module.exports = {
    // entry point name => the path to the file relative to webpack.config.js
    entry: {app: './src/index.new.js'},
    // out points to the absolute filesystem path of the output bundle
    output: {
        // path : output directory
        path: path.resolve(__dirname),
        // output file name
        // webpack replace [name] with the entry point name 
        filename: '[name]-bundle.js'
    },
    module: {
        // each rule contains rules to select a subset
        // of the project files and the name of the loader
        // that precess those files
        rules: [
            {
                // webpack recognized files from their file names and locations
                // on the file system
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                // list of loaders to use
                use: ['babel-loader']
            }
        ]
    }
};
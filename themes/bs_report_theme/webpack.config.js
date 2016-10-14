 module.exports = {
    watch: true,
     entry: './client/app.js',
     output: {
         path: './public/js',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 }

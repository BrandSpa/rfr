// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const fs = require('fs');
const Path = require('path');

 module.exports = {
     entry: {
       app: './client/app.js',
     },
     output: {
         path: './public/js',
         filename: '[name].[hash].js'
     },
     module: {
        loaders: [
          {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
     },
    plugins: [
      // new BundleAnalyzerPlugin()
      function () {
        this.plugin("done", function (statsData) {
          var stats = statsData.toJson();
          console.log(stats.chunks[0].files[0]);
          if (!stats.errors.length) {
            var htmlFileName = "footer.php";
            var html = fs.readFileSync(Path.join(__dirname, htmlFileName), "utf8");

            var htmlOutput = html.replace(
              /<script\s+src=(["'])(.+?)app.*\.js\1/i,
              "<script src=$1$2" + stats.chunks[0].files[0] + "$1");

            fs.writeFileSync(
              Path.join(__dirname, htmlFileName),
              htmlOutput);
          }
        });
      }
    ]
 }

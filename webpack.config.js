const path = require("path");
 
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
    mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
    optimization: {
    // mysqljs breaks when minified in this way.
    minimize: false
    },
};
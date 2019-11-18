const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: "./src/index", // string | object | array
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
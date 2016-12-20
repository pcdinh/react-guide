# Description

We try to create a React component whose data is fetched from external data
source using HTTP client.

# Application structure

```
webpack.config.js
index.html
src/
    app.js
    posts.jsx
static/
       img/
       css/
       js/
```

# New library

```
cd react-guide
npm install whatwg-fetch es6-promise babel-preset-stage-0 babel-polyfill --save-dev
```

# Webpack's webpack.config.js

```
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src`,
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    `${__dirname}/src/app.js`
  ],
  output: {
    path: __dirname,
    filename: 'static/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ["syntax-async-functions", "transform-async-to-generator"]
        }
      }
    ]
  },
  resolve: {
    root: [
        path.resolve('../node_modules'),
        path.join(__dirname, "..", "node_modules"),
        path.join(__dirname, "src", "modules"),
    ],
    extensions: ['', '.js', '.jsx'],
  }
};
```
}

# Packaging modules using Webpack

Assuming that you are in `./hello4-state`

```
../node_modules/.bin/webpack -p --watch --display-error-details --optimize-dedupe
```
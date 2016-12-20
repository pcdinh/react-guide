# Description

We try to create React elements using stateless functions instead of ES6 class.
The element named `HelloWorld` will be rendered inside the main one `App`.

# Application structure

```
webpack.config.js
index.html
src/
    app.js
    helloworld.jsx
static/
       img/
       css/
       js/
```

# Webpack's webpack.config.js

```
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src`,
  entry: `${__dirname}/src/app.js`,
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
          presets: ['es2015', 'react']
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

Assuming that you are in `./hello3-elements`

```
../node_modules/.bin/webpack -p --watch --display-error-details --optimize-dedupe
```
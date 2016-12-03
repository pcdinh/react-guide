# Description

We try to create a simple Single Page Application with several "pages".

# Application structure

```
webpack.config.js
index.html
src/
    components/

               home.js
               contact.js
    app.js
    main.js
static/
       img/
       css/
       js/
```

# Install react-router

```
cd react-guide
npm install --save-dev react-router
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

# Notes:

`Adjacent JSX elements must be wrapped in an enclosing tag` reminds that
content of a React component or element must be wrapped in a <container>. So:

`Wrong`

```
return (
  <h1>Something</h1>p>
  <p>More</p>p>
)
```

`Right`

```
return (
  <div>
    <h1>Something</h1>p>
    <p>More</p>p>
  </div>
)

```

# Packaging modules using Webpack

Assuming that you are in `./simple-pages`

```
../node_modules/.bin/webpack -p --watch -p --watch --display-error-details --optimize-dedupe
```
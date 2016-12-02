# Description

In this guide, I try to create 2 same-level components and render them at 2 different DOM node


# Create a new webpack.config.js

```
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      // JavaScript
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // CSS
      {
        test: /\.css$/,
        include: path.join(__dirname, 'static'),
        loader: 'style-loader!css-loader?' + qs.stringify({
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]-[local]'
        })
      }
    ]
  },
};

```


# Create a new directory to host source code

```
mkdir hello1
cd hello1
```

# Create source code file

hello.jsx: Our first component

```
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello 20</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
```


# Create source code file

world.jsx: Our second component


```
import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('world'));
```


# Create source code file

index.html: Web server will load it

```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello React</title>
  </head>
  <body>
    <div id="hello"></div>
    <div id="world"></div>
<script src="./bundle.js"></script>
  </body>
</html>
```


# Create source code file

main.js: Used for Webpack to transform source code in ES6 to ES5


```
import Hello from './hello.jsx';
import World from './world.jsx';
```

# Transform ES6 code into ES5

```
webpack
```

or

```
webpack --watch
```

## Use -p key (shortcut for --optimize-minimize):

```
webpack -p --watch
```


# Run the app

```
http://localhost:8083/hello1
```


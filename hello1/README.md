# Description

In this guide, I try to create 2 same-level and render them at 2 different DOM node


# Create Github project named "react-guide"

```
mkdir react-guide
cd react-guide
echo "# React Guide" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/pcdinh/react-guide.git
git push -u origin master
```


# Download local libraries for this project

```
npm init -y
npm install --save react@15.4.0 react-dom@15.4.0
npm install --save-dev webpack
npm install webpack-dev-server

npm install --save-dev babel-core
npm install --save-dev babel-loader

npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react

npm install --save-dev react-hot-loader
npm install --save-dev style-loader
```

# A new package.json will be created with the following content inside

```
{
  "name": "reactjs3",
  "version": "1.0.0",
  "description": "Sample code for ReacJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack-server": "webpack-dev-server --port 8111 --hot --inline --output-public-path=.",
    "web-server": "http-server -p 3000 .",
    "start": "npm run webpack-server & npm run web-server"
  },
  "author": "Pham Cong Dinh",
  "license": "MIT",
  "dependencies": {
    "react": "^15.4.0",
    "react-dom": "^15.4.0"
  },
  "devDependencies": {
    "babel-core": "^6.18.2",
    "babel-loader": "^6.2.8",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "react-hot-loader": "^1.3.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.13.3"
  }
}
```

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


# React Guide

For React beginners

# Technology stacks

`ReactJS 15.4`, `ES6`, `Webpack 1.13`, `Babel 6.18`
`NodeJS 7.2`

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
npm install --save-dev webpack-dev-server

npm install --save-dev babel-core
npm install --save-dev babel-loader
npm install --save-dev babel-plugin-uglify

npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react

npm install --save-dev react-hot-loader
npm install --save-dev style-loader
```


# A new package.json will be created with the following content inside

```
{
  "name": "react-guide",
  "version": "1.0.0",
  "description": "ReacJS for beginners",
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

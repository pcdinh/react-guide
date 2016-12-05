# Description

We try to create a simple Single Page Application with several "pages".

# Application structure

```
webpack.config.js
index.html
src/
    components/
               user/
                    list.js
                    list_wrapper.js
               home.js
    app.js
    main.js
static/
       img/
       css/
       js/
```

# Install react-router

We use `react-router 3.0`

```
cd react-guide
npm install --save-dev react-router
```

# Notes:


# Packaging modules using Webpack

Assuming that you are in `./simple-pages`

```
../node_modules/.bin/webpack -p --watch -p --watch --display-error-details --optimize-dedupe
```
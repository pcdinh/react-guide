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
               profile.js
               search.js
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

### HTML tags

`Adjacent JSX elements must be wrapped in an enclosing tag` reminds that
content of a React component or element must be wrapped in a <container>. So:

Wrong

```
return (
  <h1>Something</h1>p>
  <p>More</p>p>
)
```

Right

```
return (
  <div>
    <h1>Something</h1>p>
    <p>More</p>p>
  </div>
)

```

### URL in <a> tags

Supposed that I have the following routes:

```
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Router>
```

which specifies:

  - `/` points to `Home` component
  - `/contact` points to `Contact` component

There are 2 ways to specify a URL that allows user to click on to switch back and
forth between components:

+ Hard-coded

```
<p>Click <a href="./#/contact">here</a> to contact us</p>
```

which allows user to switch to `Contact` component via route `contact`.

+ react-router way

Use <Link> component:

`<Link to="{path}">here</Link>` which yields `<a href="#{path}">here</a>`

E.x:

```
<p>Click <Link to="/home">here</Link> to be back to Home page</p>
```

### Parameterized route

```

      <Router history={hashHistory}>
        <Route path='/profile/:username' component={Profile} />
      </Router>

```

The the value of the parameter can be accessed using `{this.props.params.username}`

E.x:

```
export class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This page is for {this.props.params.username}</h2>
      </div>
    )
  }
}

```

### URL with query string

Image that you define a router `search` that takes some query strings

```
      <Router history={hashHistory}>
        <Route path='/search' component={Search} />
        <Route path='*' component={NotFound} />
      </Router>
```

then in a component, a query string is populated

```
export class Home extends Component {

  render() {
    return (
      <div>
        <p>Click <a href="./#/search?q=bitcoin">here</a> to search for bitcoin</p>
      </div>
    )
  }
}
```

You can access the query string in target component as follows:

```
import React, { Component } from 'react'

export class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Your are searching for <strong>{this.props.location.query.q}</strong></p>
      </div>
    )
  }
}
```


# Packaging modules using Webpack

Assuming that you are in `./simple-pages`

```
../node_modules/.bin/webpack -p --watch -p --watch --display-error-details --optimize-dedupe
```
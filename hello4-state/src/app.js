import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'es6-promise';
import 'whatwg-fetch';

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "No data",
            posts: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const rawData = await fetch('https://www.reddit.com/r/lisk.json');
        const data = await rawData.json();
        this.setState({
            message: "",
            posts: data.data.children
        });
    }

    render() {
        const posts = this.state.posts;
        const host = 'https://www.reddit.com'
        return (
            <ul>
              {posts.map(post =>

                <li key={post.data.id}><a href={ host + post.data.permalink }>{post.data.title}</a> By [{post.data.author}]</li>
              )}
            </ul>
        )
    }
}

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('data'));

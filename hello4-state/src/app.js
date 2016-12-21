import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'es6-promise';
import 'whatwg-fetch';

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "No data",
            posts: [],
            status: 1
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const resp = await fetch('https://www.reddit.com/r/lisk.json');
            if (resp.status == 200) {
                const data = await resp.json();
                this.setState({
                    message: "",
                    posts: data.data.children,
                    status: 1
                });
            } else {
                this.setState({
                    message: resp.statusText,
                    posts: [],
                    status: 0
                });
            }
        } catch (e) {
            let message;
            console.log(e.lineNumber)
            if (e instanceof TypeError) {
                message = "Unable to connect to host"
            } else {
                message = e.message
            }
            this.setState({
                message: message,
                posts: [],
                status: 0
            });
        }
    }

    render() {
        if (this.state.status == 1) {
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
        return (
            <p>{this.state.message}</p>
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

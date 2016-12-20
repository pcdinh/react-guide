import {HelloElement} from './helloworld'
import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{
    render() {
        return (
            <div>
                <HelloElement message="Hello React Element"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('hello'));

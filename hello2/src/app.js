import {HelloWorld} from './helloworld'
import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('hello'));

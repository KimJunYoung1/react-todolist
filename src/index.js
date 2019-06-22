import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

class App extends Component{
    constructor(){
        super()        
    }

    render(){
        return (
            <div className="container">
                <div className="todoForm">                                   
                    <Search />                    
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

import React, {Component} from 'react';
import Todolist from './components/todolist';
import './Ap.css'

class Ap extends Component{
    render() {
        return (
            <div className="App">
                    <Todolist />
            </div>
        );
    }

}

export default Ap;

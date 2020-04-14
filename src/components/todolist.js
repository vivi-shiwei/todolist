import React, {Component} from 'react';


import '../assets/css/todolist.css'

class todolist extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state={
            list:[],
            finishList:[]
        };
    }
    locsetItem=(key, value)=>{
        localStorage.setItem(key,JSON.stringify(value));
    }
    locgetItem=(key)=>{
        return JSON.parse(localStorage.getItem(key));
    }
    componentDidMount() {
        let locTodolist = this.locgetItem("Todolist");
        if(locTodolist){
            this.setState({
                finishList:locTodolist
            })
        }
    }

    addData=()=>{
        if(this.textInput.current.value===""){
            return false;
        }
        else {
            var tempList = this.state.finishList;
            tempList.push(this.textInput.current.value);
            this.textInput.current.value="";
            this.setState({
                list:tempList
            })
            this.locsetItem("Todolist",tempList);
        }
    };
    removeData=(key)=>{
        var tempList= this.state.finishList;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        this.locsetItem("Todolist",tempList)
    };

    render() {
        return(
            <div id="todolist">
                <header>
                    <h1>React Todolist</h1>
                </header>
                <div className="center">
                    <div id="inpTodolist">
                        <input className="txtTodolist" ref={this.textInput}/>
                     </div>
                    <button className="butAdd" onClick={this.addData}>Submit</button>
                </div>
                <ul>
                    {
                        this.state.finishList.map((value,key)=> {
                            return(
                                <li key={key}>
                                    <div>
                                        <button className="butDel" onClick={this.removeData.bind(this,key)}>remove</button>
                                        <p>{value}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}
export default todolist;

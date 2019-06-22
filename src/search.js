import React, { Component } from 'react';
import Alarm from "./alarm"
import Todo from "./todo"
import Todolist from "./todolist"

class Search extends Component {
    constructor(props){
        super(props)        
        this.state = {
            todo : [],
            toDoObj : {}, // 추가될때마다 [{key1 : []}, {key2 : []}] ......
            header : "HEADER", 
            num: 0,
            changeToDo: []
        }        
        this.onKeyDownToDoDataName = this.onKeyDownToDoDataName.bind(this);  
        // this.onKeyDownToDoListData = this.onKeyDownToDoListData.bind(this);
    }
    // todo의 데이터를 만들어주는 메서드
    onKeyDownToDoDataName(e){    
        if(e.key === 'Enter' && e.target.value.length !== 0){                    
            this.setState({
                toDoObj : this.state.toDoObj[e.target.value] = []
            })

            this.state.todo.push(this.state.toDoObj);       
            this.setState({
                toDoObj : {}
            })

            e.target.value = null
            
        } else if(e.keyCode === 27){
            e.target.value = null
        }        
    }
    // ...배열안의 객체에 어떻게 접근해서 뜯어낸 후에 화면에 뿌려야할지 고민중 // 정답은 props로 새로운 component로 배열만 까서 흘려주는것
 
    // componentDidUpdate(){
    //     console.log(this.state.todo)
    // }


    // onKeyDownToDoListData(e){    
    //     if(e.key === 'Enter' && e.target.value.length !== 0){                    
    //         this.setState({
    //             toDoObj : this.state.toDoObj[this.state.num++] = this.state.changeToDo.concat(e.target.value)
    //         })

    //         this.state.todo.push(this.state.toDoObj);       
    //         this.setState({
    //             toDoObj : {}
    //         })

    //         e.target.value = null
            
    //     } else if(e.keyCode === 27){
    //         e.target.value = null
    //     }        
    // }
    

    render(){        
        return (            
            <React.Fragment>         
                <div className="title">To Do List Sprint</div>             
                <div className="content1">            
                {/* 모든글자 검색기능 - input box */}
                    <input className="searchInputBox" type="text" placeholder="                    Write Here 🔎" />
                    <div>
                        <Alarm />
                    </div>
                    <div>
                {/* left contents todo function */}
                        <Todo onClickDataName={this.onKeyDownToDoDataName} />
                        {this.state.todo.map(todo => 
                            <ul>
                                <li className="todoCategory">
                                    {Object.keys(todo)}
                                </li>
                            </ul>
                        )}
                    {/* To Do List Input Box */}
                    {this.state.todo.length !== 0 ? <input className="addToDoList" type="text" placeholder="Write To Do List Here" /> : null}

                    </div>                    
                </div>
                <div className="header">{this.state.header}</div>
                <div className="content2">   
                To Do List
                        <Todolist />                                                  
                </div>
            </React.Fragment>
        )
    }
}





export default Search;


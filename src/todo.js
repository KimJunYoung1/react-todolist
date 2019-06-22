import React, { Component } from 'react';


class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            plusMinusBtn : true,
            todoVal : '',            
        }
        this.showTodoPlusMinus = this.showTodoPlusMinus.bind(this)        
    }
    // 플러스 마이너스 버튼 - 이걸로 인풋창이 나오고 사라지게 할 메서드
    showTodoPlusMinus(){        
        this.setState(prevState => ({
            plusMinusBtn : !prevState.plusMinusBtn
        }))         
    }    

    
    render(){
        return (
            <React.Fragment>
                <div className="todotest">todo showHide test
                {/* todo의 첫번째 plus and minus btn */}
                    {this.state.plusMinusBtn ? 
                    <button className="plus" onClick={this.showTodoPlusMinus}>+</button>
                     :
                    <button className="minus" onClick={this.showTodoPlusMinus}>-</button>}
                {/* todo에 쌓을 input */}
                {this.state.plusMinusBtn ? null : <input onKeyDown={this.props.onClickDataName} type="text" className="addToDo" placeholder="          Write To Do Here " />}
                    
                </div>
            </React.Fragment>
        )
    }
}



export default Todo
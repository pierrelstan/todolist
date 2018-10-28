import React from 'react';
import TodoList from './TodoList';


class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text:''
        }))
    }
    
        
        removeTodo(deletetodo) {
            
         console.log(deletetodo)
            let filteredArray = this.state.items.filter((item) => item !==deletetodo)
          //console.log(filteredArray.length)
            this.setState({
                items:filteredArray
            })
            
            
        }
    
    render() {
        return (
            <div >
                <div className="Header-todo-list"> 
                    <h1 className="todo-list__title">MY TODO LIST: {this.state.items.length}</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input id="new-todo"
                            value={this.state.text}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Please enter your to-do list"
                        />
                        <button className="todo-list__button">Add </button>

                    </form>
                </div>
                
                <TodoList items={this.state.items} removeTodo={this.removeTodo.bind(this)}  />
            </div>
        )
    }
}
export default TodoApp;
import React from 'react';
import DisplayItem from './displayItem'

class TodoList extends React.Component {
  
    
    render() {
        return (
            <ul >
               
                {this.props.items.map((item) => (
                    
                 <DisplayItem
                        key={item.id}
                        removeTodo={this.props.removeTodo.bind(null, item)}
                  item={item}/>
                ))
                }
            </ul>
        )
    }
    
}
export default TodoList;
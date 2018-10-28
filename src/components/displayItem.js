import React from 'react';

class DisplayItem extends React.Component{
constructor(){
    super()
    this.state= {
        done: false
    }
    this.handleDone = this.handleDone.bind(this);
}
    handleDone(event) {
        this.setState({
            done: !this.state.done
        })
    }
    render(){
        let item = this.props.item
        return (
            <li  key={item.id} className={this.state.done ? "line" : ""}>

                {item.text}
                <input
                    checked={this.state.done}
                    onChange={this.handleDone}
                    type="checkbox"
                />
                <a className="close" onClick={this.props.removeTodo.bind(null, item)}>  <i className="fas fa-times-circle"></i></a>
            </li>
        )
    }
}
export default DisplayItem;
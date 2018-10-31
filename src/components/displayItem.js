import React from 'react';

class DisplayItem extends React.Component{
constructor(){
    super()
    this.state= {
        done: false,
        editing: false,
        NewtText: '',
        saved:''
    }
    this.handleDone = this.handleDone.bind(this);
    this.handleEditingDone = this.handleEditingDone.bind(this)
    this.handleEditingChange = this.handleEditingChange.bind(this);
    this.handlesave=this.handlesave.bind(this)
}
    componentDidMount(){
        console.log("component is mouted")
        this.setState({
            NewtText: this.props.item.text
        })
    }    

    handleDone(event) {
        this.setState({
            done: !this.state.done
        })
        this.handleEditing=this.handleEditing.bind(this);
    }
    handleEditing(event){
        this.setState({
            editing: true,
            NewtText: this.props.item.text
        })
    }
    handleEditingDone(event){
        console.log("editing is done")
       if(event.keyCode === 13) {
           this.setState({ editing: false }) 
       } 
    }
    handlesave() {
        console.log('save!!')
        //alert('Your change has been Saved!')
        this.setState({
            editing:false
        })
    }
    handleEditingChange(event){
        this.setState({
          NewtText: event.target.value 
        })
    }
    render(){
        let item = this.props.item;
        let normalStyle = {}
        let editInput= {}
        
        
            this.state.editing ? 
                normalStyle.display = 'none'
                : editInput.display = 'none';
                
        return (
            <li  key={item.id} className={this.state.done ? "line" : ""}>

                <div style={normalStyle}>
                    <span className="list-color">{this.state.NewtText}</span>
                <input
                    checked={this.state.done}
                    onChange={this.handleDone}
                    type="checkbox"
                   
                />
                <a className="editPen"><i onClick={this.handleEditing.bind(this)} className="fas fa-pen"></i></a>
                <a className="close" onClick={this.props.removeTodo.bind(null, item.id)}> 
                 <i className="fas fa-times-circle"></i>
                 </a>
                </div>
                <div style={editInput}>
                    <input
                        className="editInput"
                        
                        onChange={this.handleEditingChange.bind(this)}
                        value={this.state.NewtText}
                        onKeyDown={this.handleEditingDone.bind(this)}

                    />
                    
                    <i className="fas fa-save save-Button " onClick={this.handlesave.bind(this)}></i>
                </div>
               
            </li>
        )
    }
}
export default DisplayItem;
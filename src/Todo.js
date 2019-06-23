import React from 'react'

 class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited : false,
            editField : null,
        }
    }

    startEdit = () => {
        this.setState({
            isBeingEdited : true
        })
    }

    onChange = (e) => {
        this.setState({editField: e.target.value})
    }

    confirmEdit = (e) => {
        e.preventDefault()
        if (this.state.editField !== null) {
            this.props.editChild(e.target.parentNode.getAttribute('data-index'), this.state.editField)
        }
        this.setState({isBeingEdited: false})
    }

    render() {

        let hideWhenEditing = { display : (this.state.isBeingEdited ? "none" : "")}
        let showWhenEditing = { display : (this.state.isBeingEdited ? "" : "none")}

        return (
            <div data-index={this.props.index}>
                <li style={hideWhenEditing}>{this.props.item}</li>
                <button onClick={this.props.onDelete}>X</button>
                <button onClick={this.startEdit} style={hideWhenEditing}>Edit</button>
                <input onChange={this.onChange} placeholder={this.props.item} style={showWhenEditing} type="text"/>
                <button onClick={this.confirmEdit} style={showWhenEditing}>Confirm</button>
            </div>
        )
    }
 }

 export default Todo
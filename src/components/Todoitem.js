import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyles = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <h3>
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>  
                {title}
                <button onClick={this.props.deleteTodoItem.bind(this, id)}>X</button>
                </h3>
                {/*CHANGE STATE USE THIS.SETSTATE  
                BUT CANNOT USE IN TODOITEM.JS
                WE MUST USE IN APP.JS
                SO WE USE PROPS TO DO THIS
                */}
            </div>
        )
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired
}
export default Todoitem

import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {

    return (
      this.props.todos.map((todo) => 
           <Todoitem key={todo.id} todo={todo} 
           markCompleted={this.props.markComplete} 
           deleteTodoItem = {this.props.deleteTodoItem}

           />
      )
    );
  }
}
//Prototype like validation
Todos.protoType = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired

}

export default Todos;
import React from 'react';
import Header from './components/layout/Header';
import Todo from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take off the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Joining the Wedding ',
        completed: false
      },
      {
        id: 3,
        title: 'Breath',
        completed: false
      }
    ]
  }

  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteTodoItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, // title: title // 
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos}
        markComplete={this.markCompleted}
        deleteTodoItem={this.deleteTodoItem}
        />   {/* todos is property like attribute in html element */}{/* rce */}


      </div>
    );
  }
}


export default App;

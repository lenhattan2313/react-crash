import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todo from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/about/About';
import axios from 'axios';
//import uuid from 'uuid';


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
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({
    todos: res.data
  }));
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
 
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }))
    
  }
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title, // title: title // 
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }));
    
  }
  render() {
    

    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" render={props => 
          (<React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todo todos={this.state.todos}
            markComplete={this.markCompleted}
            deleteTodoItem={this.deleteTodoItem}
            />
          </React.Fragment>)}/>
           {/* todos is property like attribute in html element */}{/* rce */}
        <Route path="/about" component={About}  />

      </div>
      </Router>
    );
  }
}


export default App;

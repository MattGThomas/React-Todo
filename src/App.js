import React from 'react';
import { declareTypeAlias, throwStatement } from '@babel/types';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();

    const newTodo = { task: this.state.todo, completed: false, id: Date.now()};
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  toggleTodo = id => {
    const newList = this.state.todos.map( task => {
      if (task.id === id) {
        const newObj = {
          ...task, completed: !task.completed
        };
        return newObj
      } else {
        return task
      }
    })

    this.setState({ todos: newList});
  }

  removeCompleted = event => {
    event.preventDefault();

    const completedArr = this.state.todos.filter(todo =>
      todo.completed === false)

    this.setState({ todos: completedArr})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />

        <TodoForm
          value={this.state.todo}
          changeTodoHandle={this.changeTodo}
          addTodoHandle={this.addTodo}
          removeCompletedTodo={this.removeCompleted}
        />
      </div>
    )
  }
}

export default App;
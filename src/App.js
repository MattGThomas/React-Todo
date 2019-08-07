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
          task: 'New Task',
          // id: Date.now(),
          id: Math.floor(Math.random() * 1000000),
          completed: false
        },
        {
          task: 'Completed Task',
          // id: Date.now(),
          id: Math.floor(Math.random() * 1000000),
          completed: true
        }
      ],
      todo: '',

      searched: [],
      // this.searchChangeHandler = this.searchChangeHandler
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

  componentDidMount = () => {
    this.setState({
      searched: this.state.todos
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      searched: nextProps.todos
    })
  }

  searchChangeHandler = (event) => {

    let currentList = [];
    let newList = [];

    if (event.target.value !== '') {
        currentList = this.state.todos

        newList = currentList.filter(todo => {
            const lowerCaseTodo = todo.toString().toLowerCase();
            const filter = event.target.value.toLowerCase();
            return lowerCaseTodo.includes(filter);
        });
    } else {
        newList = this.state.todos;
    }
    this.setState({
        searched: newList
    });
}

 

  render() {
    return (
      <div className='todoContainer'>
        <h2 className='header'>Welcome to your Todo App!</h2>
        <div className='todoContent'>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />

        <TodoForm
          value={this.state.todo}
          changeTodoHandle={this.changeTodo}
          addTodoHandle={this.addTodo}
          removeCompletedTodo={this.removeCompleted}
          searchChangeHandler={this.searchChangeHandler}
        />
        </div>
      </div>
    )
  }
}

// checking 
export default App;
import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
    <div className='todoList'>
        <div>
            <h2>
                Tasks:
            </h2>
        </div>
        <p>
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodo={props.toggleTodo}
                    // removeCompleted={props.removeCompleted}
                />
            ))}
        </p>
    </div>
    );
}

export default TodoList;
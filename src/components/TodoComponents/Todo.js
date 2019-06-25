import React from 'react';



const Todo = props => {
    const clickHandler = () => {
        props.toggleTodo(props.todo.id);
    };
    return (

        <div className={`todo${props.todo.completed ? ' completed' : '' }`} onClick={clickHandler}>
            <p>{props.todo.task}</p>
        </div>
        )
    }

export default Todo;
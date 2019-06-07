import React from 'react';
import { throwStatement } from '@babel/types';

const TodoForm = props => {
    return (
        <form className='todoForm'>
            <input 
            className='input'
            type='text'
            placeholder='...enter new task, not Nubia'
            name='todo'
            onChange={props.changeTodoHandle}
            value={props.value}
            />
            <button onClick={props.addTodoHandle} className='addBtn'>Add Todo</button>
            <button onClick={props.removeCompletedTodo} className='completedBtn'>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
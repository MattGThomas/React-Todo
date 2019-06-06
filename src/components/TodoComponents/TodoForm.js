import React from 'react';
import { throwStatement } from '@babel/types';

const TodoForm = props => {
    return (
        <form>
            <input 
            type='text'
            placeholder='...enter todo'
            name='todo'
            onChange={props.changeTodoHandle}
            value={props.value}
            />
            <button onClick={props.addTodoHandle}>Add Todo</button>
            <button onClick={props.removeCompletedTodo}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
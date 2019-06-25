import React from 'react';
import { throwStatement } from '@babel/types';

const TodoForm = props => {
    return (
        <div>
        <div className ='todoForm'>
        <form className='todoForm'>
            <input 
            className='input'
            type='text'
            placeholder='...enter new task, not Nubia'
            name='todo'
            onChange={props.changeTodoHandle}
            value={props.value}
            />
            <button onClick={props.addTodoHandle} className='addBtn'>Add Task</button>
            <button onClick={props.removeCompletedTodo} className='completedBtn'>Clear Completed</button>
        </form>
        </div>
        {/* <form>
            <input
            type='text'
            placeholder='...search your tasks here'
            className='searchInput'
            onChange = {props.searchChangeHandler}
            value={props.value}
            />
            <button>Search</button>
        </form> */}
        </div>
    )
}

export default TodoForm;
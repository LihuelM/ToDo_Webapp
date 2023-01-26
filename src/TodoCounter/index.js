import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter () {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <section className='TodoCounter'>
            <h1>Your Tasks</h1>
            <h2>Completed {completedTodos} to {totalTodos} ToDos</h2>
        </section>
    );
}

export { TodoCounter };
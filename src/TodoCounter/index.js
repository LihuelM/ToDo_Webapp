import React from 'react';
import './TodoCounter.css';

function TodoCounter ({totalTodos, completedTodos}) {
    return (
        <section className='TodoCounter'>
            <h1>Your Tasks</h1>
            <h2>Completed {completedTodos} to {totalTodos} ToDos</h2>
        </section>
    );
}

export { TodoCounter };
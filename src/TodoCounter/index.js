import React from 'react';
import './TodoCounter.css';

function TodoCounter ({totalTodos, completedTodos, loading}) {
    return (
        <section className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            <h1>Your Tasks</h1>
            <h2>Completed {completedTodos} to {totalTodos} ToDos</h2>
        </section>
    );
}

export { TodoCounter };
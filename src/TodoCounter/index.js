import React from 'react';
import './TodoCounter.css';

function TodoCounter ({total, completed}) {
    return (
        <section className='TodoCounter'>
            <h1>Your Tasks</h1>
            <h2>Completed {completed} to {total} ToDos</h2>
        </section>
    );
}

export { TodoCounter };
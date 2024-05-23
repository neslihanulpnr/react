import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState("")

    const createTodo = () => {
        if(!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                type='text' className='todo-input' placeholder='Todo giriniz' />
            <button onClick={createTodo} className='todo-create-button'>Todo oluştur</button>
        </div>
    )
}

export default TodoCreate

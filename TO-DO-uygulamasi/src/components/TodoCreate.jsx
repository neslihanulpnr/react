import React from 'react'
import '../App.css'

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input type='text' className='todo-input' placeholder='Todo giriniz' />
            <button className='todo-create-button'>Todo oluştur</button>
        </div>
    )
}

export default TodoCreate

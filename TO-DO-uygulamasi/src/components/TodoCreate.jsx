import React from 'react'
import '../App.css'

function TodoCreate() {
    return (
        <div>
            <div>
                <input type='text' className='textİnput' placeholder='Todo giriniz'/>
            </div>

            <div>
                <button className='todoButton'>Todo oluştur</button>
            </div>

        </div>
    )
}

export default TodoCreate

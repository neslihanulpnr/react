import React from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';

function Todo({ todo, onRemoveTodo }) {

  const {id, content} = todo;

  const [editable, setEditable] = useState(false)

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: "1px solid lightgrey", padding: "10px", marginTop: "10px" }}>

      <div style={{ color: 'black' }}>
        {content}
      </div>

      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
        {
            editable ? <FaCheck className='todo-icons' /> : <FaEdit className='todo-icons' onClick={() => setEditable(true)}/>
        }
      </div>
    </div>
  )
}

export default Todo

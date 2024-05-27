import React from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

  const {id, content} = todo;

  const [editable, setEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(content)

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id : id,
      content : newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: "1px solid lightgrey", padding: "10px", marginTop: "10px" }}>

      <div style={{ color: 'black' }}>
        {
          editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} 
          style={{width: "380px"}}
          className='todo-input' type='text'/> : content
        }
      </div>

      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
        {
            editable ? <FaCheck className='todo-icons' onClick={updateTodo}/> 
            
            : <FaEdit className='todo-icons' onClick={() => setEditable(true)}/>
        }
      </div>
    </div>
  )
}

export default Todo

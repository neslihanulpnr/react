import React from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo({ todo }) {

  const {id, content} = todo;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: "1px solid lightgrey", padding: "10px", marginTop: "10px" }}>

      <div style={{ color: 'black' }}>
        {content}
      </div>

      <div>
        <IoIosRemoveCircle className='todo-icons' />
        <FaEdit className='todo-icons' />
      </div>
    </div>
  )
}

export default Todo

import React from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: "1px solid lightgrey", padding: "10px"}}>
      <div style={{ color: 'black' }}>
        ben ilk todoyum
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' />
        <FaEdit className='todo-icons' />
      </div>
    </div>
  )
}

export default Todo

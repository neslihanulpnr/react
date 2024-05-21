import React from 'react'
import '../App.css'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div>
     <p className='firstTodo'> ben ilk todoyum</p>
     <IoIosRemoveCircleOutline />
     <FaEdit />
    </div>
  )
}

export default Todo

import { useEffect } from 'react';
import './App.css'
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
// VERİ ÇEKME
  const getAllUsers = async()=>{
    const response = await axios.get(BASE_URL + "/users");
  console.log(response)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users" + userId);
    console.log(response.data)
  }


// VERİ KAYDETME
  const createUser = async (newUser) => {
    //post: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }


  useEffect(() => {
   // getAllUsers();
   //getUserById(1);

   const newUser ={
    "username" : "ugur",
    "password" : "zzz"
   }
   createUser(newUser);
  }, []) 

  return (
    <div>
     
    </div>
  )
}

export default App

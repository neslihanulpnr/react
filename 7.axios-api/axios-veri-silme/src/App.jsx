import { useEffect } from 'react';
import './App.css'
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  // VERİ ÇEKME
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users" + userId);
    console.log(response.data)
  }


  // VERİ KAYDETME
  const createUser = async (newUser) => {
    //Post: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }

  //VERİ GÜNCELLEMEK
  const updateUser = async (userId, updateUser) => {
    //Put: veri güncellemek için kullanılır
    axios.put(`${BASE_URL}/users/${userId}`, updateUser)
  }

  //VERİ SİLME
  const deleteUserById = async (userId) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deleteResponse.data)
  }

  useEffect(() => {
    // getAllUsers();
    //getUserById(1);


    //VERİ KAYDETME
    //const newUser ={
    //"username" : "ugur",
    // "password" : "zzz"
    //}
    //createUser(newUser);


    //VERİ GÜNCELLEME
    // updateUser("57b4",{
    //  "username" : "demet",
    // "password" : "1234"
    // })

    //veri silme
    deleteUserById("57b4");
  }, [])

  return (
    <div>

    </div>
  )
}

export default App

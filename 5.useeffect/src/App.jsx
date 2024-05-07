import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");


  useEffect(() => {
    console.log("her zaman çalışır")
  })

   useEffect(() => {
     console.log("ilk render edildiğinde çalışır")
   },[])

   useEffect(() => {
    console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çalışır")
   }, [firstName])

   useEffect(() => {
      console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde çalışır")
   }, [lastName])

   useEffect(() => {
    console.log("ilk render edildiğinde ve firstname veya lastname state değerlerinden değişiklik olduğunda çalışır")
   },[firstName, lastName])

  return (
    <div>
    <div>
    <button onClick={() => setFirstName("nesliş")}>adı değiştir</button>
    </div>

    <div>
    <button onClick={() => setLastName("ulupınar")}>soyadı değiştir</button>
    </div>
    </div>
  )
}

export default App

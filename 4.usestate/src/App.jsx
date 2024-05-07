import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("neslihan");
  const [lastName, setLastName] = useState("ulupınar");
  const [names, setNames] = useState(["neslihan", "uğur", "begüm"])
  const [userInfo, setUserInfo] = useState({ username: "nesliş", password: "1111" })
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0);

  const handleChange = () => {
    debugger;
    setFirstName("begüm")
  }

  const arttir = () => {
    setCount(count + 2);
  }

  const azalt = () => {
    if (count > 0){
      setCount(count - 2)
    }
  }

  console.log("component render edildi canım benim sen merak etme aşkom")

  return (
    <>
      <div>
        {firstName}
      </div>

      <div>
        <button onClick={() => { setFirstName("Ayşenur") }}>ismi değiştir</button>
      </div>

      <br /><br />

      <div>
        {firstName}
      </div>

      <div>
        <button onClick={handleChange}>ismi değiştir</button>
      </div>

      <br /><br />

      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <br /><br />

      <div>
        {userInfo.username} {userInfo.password}
      </div>

      <br /><br />


      <div>
        {show ? <div> {userInfo.username} {userInfo.password} </div> : <div> bilgileri gösterme</div>}
      </div>

      <br /><br />

      <div>
        <div>{count}</div>

        <div>
          <button onClick={arttir}>arttır</button>
        </div>

        <br /> <br />

        <div>
          <button onClick={azalt}>azalt</button>
        </div>
      </div>


    </>
  )
}

export default App

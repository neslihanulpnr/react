import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//javascript kodları yazılır 
let a = 15;
const firstname = "neslihan"; 

let vize1 = 50;
let vize2 = 50;

let isimler = [
  "neslihan",
  "begüm",
  "uğur",
  "demet", 
  "adem"
]
  return (
//html kodları yazılır
    <div>
      <p>a değişkeni değeri : {a}</p>
      <p>müşterinin adı : {firstname}</p>


      {
        (vize1 + vize2) / 2 >= 50 ? <p>dersten geçtin aferin</p> : <p> dersten kaldın, geçmiş olsun</p>
      }

      {
        isimler.map((isim, index) => (
          <div style={{backgroundColor: "orange",}} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App

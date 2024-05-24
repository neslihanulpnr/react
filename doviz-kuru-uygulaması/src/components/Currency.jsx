import React, { Children, useState } from 'react'
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios"

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_XURFCn0c1S9MvrDj8UceJgHjYAJfBsFPyFEFeBXE"

function Currency() {

   const [amount, setAmount] = useState(0);
   const [fromCurrency, setFromCurrency] = useState("USD");
   const [toCurrency, setToCurrency] = useState("TL");
   const [result, setResult] = useState(0);

   const exchange = async () => {
    //console.log(amount)
    //console.log(fromCurrency)
    //console.log(toCurrency)
    
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
  console.log(response);
   }

  return (
    <div className='currency-div'>
      <div>
        <h3 style={{color: "black", fontFamily: "arial"}}>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>

        <FaRegArrowAltCircleRight style={{ fontSize: "25px", marginRight: "10px", color: "black" }} />

        <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className="result" />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
          <option>TL</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        
      </div>
      <div>
        <button onClick={exchange}
        className='exchange-button'>Çevir</button>
      </div>
    </div>
  )
}

export default Currency

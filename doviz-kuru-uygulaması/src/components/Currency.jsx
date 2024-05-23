import React, { Children, useState } from 'react'
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Currency() {

   const [amount, setAmount] = useState(0);
   const [fromCurrency, setFromCurrency] = useState("");
   const [toCurrency, setToCurrency] = useState("");
   const [result, setResult] = useState(0);

   const exchange = () => {
    console.log(amount)
    console.log(fromCurrency)
    console.log(toCurrency)
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

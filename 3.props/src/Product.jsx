import React from 'react'

function Product(props) {
    console.log(props)
  return (
    <div>
      <div> ÜRÜN BİLGİLERİ </div>

      <div>
        <div>İsim : {props.productName}</div>
        <div> Fiyat : {props.price}</div>
      </div>

    </div>
  )
}

export default Product

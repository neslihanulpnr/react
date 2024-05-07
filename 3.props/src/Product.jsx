import React from 'react'

function Product(props) {
  //  console.log(props)
  
  const { productName, price } = props;
  
  return (
   <div>
       {/*  <div> ÜRÜN BİLGİLERİ </div>
 
      <div>
        <div>İsim : {props.productName}</div>
        <div> Fiyat : {props.price}</div>
      </div>*/}



<div>ÜRÜN BİLGİLERİ</div>
  
  <div>isim : {productName}</div>
  
  <div>fiyat : {price}</div>
  
  </div>

  )
}

export default Product
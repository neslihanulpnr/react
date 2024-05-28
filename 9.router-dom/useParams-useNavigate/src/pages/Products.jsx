import React from 'react'
import Product from '../components/Product'

const products =[
  {
    id : "1",
    name : "Bilgisayar",
    price : 40.000,

  },
  {
    id : "2",
    name : "Telefon",
    price : 20.000,

  },
  {
    id : "3",
    name : "Televizyon",
    price : 70.000,

  },
]

function Products() {
  return (
    <div>
      {
        products && products.map((product) => {
          <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Products

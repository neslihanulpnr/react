import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import Product from '../components/Product'

function ProductDetails() {
    const { id } = useParams(); //urldeki id parametresini al
    return (
        <div>
            <h1>Ürün Detayları</h1>
            <hr />
            {
                products?.map((product) => {
                    if (product.id == id) {
                       return <Product product={product}/>
                    }
                })
            }
        </div>
    )
}

export default ProductDetails
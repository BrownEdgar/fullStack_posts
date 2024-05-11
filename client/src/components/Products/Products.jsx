import React, { useState } from 'react'
import './Products.scss'
import Product from '../Product/Product'

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ])
  return (
    <div className='Products'>
      {products.map(product => {
        return <Product key={product.id} product={product.id} />
      })}
    </div>
  )
}

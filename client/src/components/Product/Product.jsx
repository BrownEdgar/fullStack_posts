import React from 'react'
import './Product.scss'

export default function Product({ product }) {
  return (
    <div className='Product'>
      <div className="Product__image">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="Product__overlay">
          <h3>Product One</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum eaque atque!</p>
        </div>
        <div className="Product__vendor">
          <img src="" alt="" />
          <h4>Jhon Doe</h4>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
      
    <div className='product-card'>
      <Link to={`/details/${product.id}`}><img src={product.image} /></Link>
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}$</p>
    </div>
  )
}

export default ProductCard
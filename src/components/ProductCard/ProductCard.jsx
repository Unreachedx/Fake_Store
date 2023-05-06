import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
      <Link to={`/details/${product.id}`}>
    <div className='product-card'>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}$</p>
    </div></Link>
  )
}

export default ProductCard
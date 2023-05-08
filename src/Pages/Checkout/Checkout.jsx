import React, {useContext} from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'

function Checkout() {
  //use global state
  //NOTE {} not []
  const {cart} = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='Product-container'>
      <p className='Topline-container'>Item Price Quantity Remove</p>
      {
        cart.map(item=><ProductCard key={item.id} 
          product={item}/>)
        }
      </div>
     </div>
  )
}

export default Checkout
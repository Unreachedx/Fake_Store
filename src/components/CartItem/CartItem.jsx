import React, {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.css'
import { FiTrash2 } from "react-icons/fi";

function CartItem({product}) {

      //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  return (
    <div className="cart-container">
        <img src={product.image} />
        <h3>{product.title}</h3>
        <h3>{product.price}$</h3>
        <h3>1</h3>
        <FiTrash2 className="trash-icon" onClick={()=>removeProduct(product.id)} />
    </div>
  )
}

export default CartItem
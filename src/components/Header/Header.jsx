import React, {useContext} from 'react'
import "./Header.css"
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function Header() {

    //use global state
    //NOTE {} not []
  const {cart} = useContext(CartContext)


  return (
    <div className='header-container'>
      <Link to='/'>
        <h1>Fake Store</h1></Link>
        <div className='cart-number-container'>
        <p className='number-container'>{cart.length}</p>
      <Link to='/checkout'>
        < AiOutlineShoppingCart className='shopping-cart'/> 
      </Link>
        </div>
        
    </div>
  )
}

export default Header
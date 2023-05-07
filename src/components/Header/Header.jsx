import React, {useContext} from 'react'
import "./Header.css"
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>
        <h1>Fake Store</h1></Link>
      <Link to='/checkout'>
        < AiOutlineShoppingCart className='shopping-cart'/> 
      </Link>
        
    </div>
  )
}

export default Header
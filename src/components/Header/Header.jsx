import React from 'react'
import "./Header.css"
import { AiOutlineShoppingCart} from "react-icons/ai";

function Header() {
  return (
    <div className='header-container'>
        <h1>Fake Store</h1>
        < AiOutlineShoppingCart className='shopping-cart'/>
    </div>
  )
}

export default Header
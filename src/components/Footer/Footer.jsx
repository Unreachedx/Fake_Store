import React from 'react'
import './Footer.css'
import { AiFillHeart } from "react-icons/ai";


function Footer() {
  return (
    <div className='footer-container'>
      <p>Made with < AiFillHeart className='love-heart'/> by Mimo</p>
        <div className='ContactUs-container'>
      <a href="/ContactUs">
        <button>Contact Us</button>
      </a>
        </div>
    </div>
  )
}

export default Footer
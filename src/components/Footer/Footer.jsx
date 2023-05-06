import React from 'react'
import './Footer.css'
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <p>Made with < AiFillHeart className='love-heart'/> by Mimo</p>
        <div className='ContactUs-container'>
      <Link to="/ContactUs">
        <p className='contact-us-btn'>Contact Us</p>
      </Link>
        </div>
    </div>
  )
}

export default Footer
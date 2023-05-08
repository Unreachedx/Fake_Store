import React, {useContext, useState, useEffect} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { CartContext } from '../../contexts/CartContext';


function ProductCard({product}) {
  //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)
  //create a varible to test UI
  //const isFavorite = false;
  //create state
  const [isCart, setIsCart] = useState(false)

  useEffect(
    ()=>{
      //is this card in cart?
      setIsCart(cart.find(item=>item.id === product.id))
      //find returns the element if found, that is considered "true"
      //returns undefined if not, that is considered "false"



    }, [cart] 
     )

  return (
      
    <div className='product-card'>
      <p></p>
      <Link to={`/details/${product.id}`}><img src={product.image} /></Link>
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}$</p>
      {
        isCart?
        <HiHeart onClick={()=>removeProduct(product.id)} className='heart-icon' />
        :
        <HiOutlineHeart onClick={()=>addProduct(product)} className='hoart-icon' />
      }
    </div>
  )
}

export default ProductCard
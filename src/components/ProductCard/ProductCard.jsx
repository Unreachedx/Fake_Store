import React, {useContext, useState, useEffect} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';


function ProductCard({product}) {
  //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)
  //create a varible to test UI
  //const isFavorite = false;
  //create state
  const [isCart, setIsCart] = useState(true)

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
      <Link to={`/details/${product.id}`}><img src={product.image} /><br/></Link>
      <p>{product.title}</p><br/>
      <p>{product.category}</p><br/>
      <p>{product.price}$</p>
      {
        isCart?
        <button onClick={()=>removeProduct(product.id)} className='btn-remove'>Remove</button>
        :
        <button onClick={()=>addProduct(product)} className='btn-add'>Add</button>
      }
    </div>
  )
}

export default ProductCard
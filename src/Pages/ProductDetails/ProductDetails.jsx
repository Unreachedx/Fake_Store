import React, {useContext, useState, useEffect} from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';

function ProductDetails() {
    //I need to know the id of the character
    //get the id from the parameter in url
    const {productId} = useParams()

    //create state to store character data
    const [product, setProduct] = useState('')

    //https://rickandmortyapi.com/api/character/5


    //I need to the data from api when the page loads
    //so i use useEffect
    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>{
                console.log(res)
                //store in state
                setProduct(res.data)
            })
            .catch(err => console.log(err))

        }, [] //this means run only once when the page loads
    )
    
    
    //use global state
    //NOTE {} not []
    const {cart, addProduct, removeProduct} = useContext(CartContext)
    //create a varible to test UI
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
    <div className='details-container'>
    <img src={product?.image} />
      <div className='container-info'>
    <p className='title'>Title: {product?.name}</p>
    <p>{product?.price}</p>
    <p>description: {product?.description}</p>
    {
        isCart?
        <button className='removecart-btn' onClick={()=>removeProduct(product.id)}>Remove</button>
        :
        <button className='addcart-btn' onClick={()=>addProduct(product)}>Add to Cart</button>
    }
      </div>
    </div>
  )
}

export default ProductDetails
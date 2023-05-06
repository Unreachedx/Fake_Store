import React from 'react'
import "./ProductDetails.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div className='details-container'>
    <img src={product?.image} />
    <div className='container-info'>
    <p className='title'>Title: {product?.name}</p>
    <p>{product?.price}</p>
    <p>description: {product?.description}</p>
    <button className='addtocart-btn'>Add to Cart</button>
    </div>

    </div>
  )
}

export default ProductDetails
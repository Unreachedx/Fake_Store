import React, { useEffect, useState } from 'react'
import './HomePage.css' 
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import Category from '../Category/Category'
import AllButton from './../AllButton/AllButton';



function HomePage() {

    const [products, setProducts] = useState([])


    useEffect(
      ()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res =>{
          console.log(res.data)
          setProducts(res.data)
        })
        .catch(err => console.log(err))
      }, []

    )

  return (
    <div className='product-container'>
      <AllButton />
      <Category />
      <div className="products-container">
        {
          products.map(item=><ProductCard key={item.id} 
          product={item}/>)
        }

      </div>
    </div>
  )
}

export default HomePage
import React, { useEffect, useState } from 'react'
import './HomePage.css' 
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'


function HomePage() {

    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const [changeCategory, setChangeCategory] = useState([])

    useEffect(
      ()=>{
        //'https://fakestoreapi.com/products/categories'
        //first API call
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
          console.log(res.data)
          setCategory(res.data)
        })
      }, []
    ),

    useEffect(
      ()=>{
        // 'https://fakestoreapi.com/products'
        //make api call
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
          console.log(res.data)
          setProducts(res.data)
        })
      }, []
    )

    useEffect(
      ()=>{
      // 'https://fakestoreapi.com/products/category/jewelery'
      axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(res=>{
        console.log(res.data)
        setChangejewelery(res.data)
        console.log("yey yewelery")
      })
      }, []
    )



  return (
    <div className='product-container'>
      <p className='all-container'>All</p>
      <div className='categories'>
        {
          //item stores temporarly the information
          category.map(item=><p onClick={()=>changeCategory(item)}>{item}</p>)
        }
      </div>
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
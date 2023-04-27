import React, { useEffect, useState } from 'react'
import './HomePage.css' 
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'


function HomePage() {

    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])

    const allProducts = () => {
      //Should show all Items back on the Page
      console.log("allButton clicked")
      setProducts(products)
    }

    const getCategoryProducts = (category) =>{
      //Should show only Categorys on page
      console.log('Catgoery works')
      setProducts(category)
      }

    useEffect(
      ()=>{
        //'https://fakestoreapi.com/products/categories'
        //'https://fakestoreapi.com/products'
        //axios.get('https://fakestoreapi.com/products/categories')
        const fetchData = async () => {
          const [res1, res2] = await Promise.all([
            axios.get('https://fakestoreapi.com/products/categories'),
            axios.get('https://fakestoreapi.com/products')
          ]);
          setCategory(res1.data);
          setProducts(res2.data);
        };
        fetchData();
      }, []);


  return (
    <div className='product-container'>
      <p className='all-container' onClick={allProducts}>All</p>
      <div className='categories'>
        {
          //item stores temporarly the information
          category.map(item=><p onClick={()=>getCategoryProducts(item)}>{item}</p>)
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
import React, { useEffect, useState } from 'react'
import './HomePage.css' 
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'


function HomePage() {
    //using state so safe api data
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])

    const allProducts = () => {
    //get all products
    axios.get(`https://fakestoreapi.com/products`)
    .then(res =>{
     //console.log(res.data).  //it is SO important to do this step first
     //now reset products to this data from the api
     setProducts(res.data)
      })
      .catch(err => console.log(err))
    }

    const getCategoryProducts = (category) =>{
      //Should show items from a particular category
      //what is the category?
      console.log("category is", category)
      //make api call to get just products from this category and
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>{
      console.log(res.data)    
      setProducts(res.data)
      })
      //reset products state to this data
    .catch(err => console.log(err))
    }
      

    useEffect(
      ()=>{
        //'https://fakestoreapi.com/products/categories'
        //'https://fakestoreapi.com/products'
        const fetchData = async () => {
          const [res1, res2] = await Promise.all([
            axios.get(`https://fakestoreapi.com/products/categories`),
            axios.get(`https://fakestoreapi.com/products`)
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
import React,{useEffect, useState} from 'react'
import './Category.css'
import axios from 'axios'



function Category() {

    const[Categories, setCategories] = useState([])

    //'https://fakestoreapi.com/products/categories'

    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res=>{
                console.log(res.data)
                setCategories(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )


  return (
    <div className='category-container'>
{   
    Categories.map((item) => (<p>{item}</p>
))}
    </div>
  )
}

export default Category
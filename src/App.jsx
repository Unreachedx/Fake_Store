import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import ContactUs from './Pages/ContactUs/ContactUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Checkout from './Pages/Checkout/Checkout'
import CartContextProvider from './contexts/CartContext'

function App() {


  return (
     <BrowserRouter>
      <CartContextProvider>
       <Header /> 
          <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/contactus' element={ <ContactUs />}/>
           <Route path='/' element={ <HomePage />}/>
           <Route path='/details/:productId' element={<ProductDetails />} />
           <Route path='/checkout' element={ <Checkout />}/>
          </Routes>
        <Footer />
      </CartContextProvider>
     </BrowserRouter>
  )
}

export default App

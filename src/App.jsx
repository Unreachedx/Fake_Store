import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {


  return (
      <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contactus' element={ <ContactUs />}/>
        <Route path='/' element={ <HomePage />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App

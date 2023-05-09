import React, {useContext} from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import Modal from 'react-modal';
import CartItem from '../../components/CartItem/CartItem';

function Checkout() {
  //use global state
  //NOTE {} not []
  const {cart} = useContext(CartContext)

  const getPrice = () =>{
    //loop through products in cart
    let Price = 0;
    for (let i = 0; i < cart.length; i++){
      Price += cart[i].price;
    }
    return Price;
   }

   const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };




  return (
    
    <div className='checkout-container'>
      <div className='head-container'>
      <h4>Item Price Quantity Remove</h4>
      </div>
      <div className='products-container'>
        {
          cart.map(item=><CartItem key={item.id} 
            product={item}/>)
          }
      </div>
      <div className='prices-container'>
      <h2>Total {getPrice()}</h2>
      </div>
      <div className='button-container'>
      <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}

export default Checkout
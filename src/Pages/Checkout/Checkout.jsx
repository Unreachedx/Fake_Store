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
      /* marginRight: '-50%', */
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




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
      <button className='button-container' onClick={openModal}>Checkout</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Your Order was successful!</h2><br/><br/>
        <h3> Check your email for the order confirmation.<br/>Thank you for Shopping with Fake Store!</h3><br/><br/>
        <button onClick={closeModal}>Return to Main Page</button>
      </Modal>
    </div>
  )
}

export default Checkout
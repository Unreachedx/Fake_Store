import {useState, createContext, useEffect} from 'react'

//create this context
export const CartContext = createContext()

//create provider
export default function CartContextProvider(props){
    //create global state
    const [cart, setCart] = useState([])

    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedCart = localStorage.getItem('cartList')
            if (storedCart) {
                //use this to initalize State
                setCart(JSON.parse(storedCart))
            }
        }, [] //runs once when context loads
    )


    const addProduct = (productToAdd) =>{
        console.log('add', productToAdd)
        //add productToAdd to cart
        let newCart = [...cart, productToAdd]
        //update state
        setCart(newCart)
        //update local storage
        localStorage.setItem('cartList' , JSON.stringify(newCart))
    }

    const removeProduct = (productId) =>{
        console.log('remove', productId)
        //remove the object with productId
        let newCart = cart.filter(item=>item.id !== productId)
        //update state
        setCart(newCart)
        //update local storage
        localStorage.setItem('cartList' , JSON.stringify(newCart))
    }
    
    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct }} >
            {props.children}
        </CartContext.Provider>
    )
}
import {useState, createContext, useEffect} from 'react'

//create this context
export const CartContext = createContext()

//create provider
export default function CartContextProvider(props){
    //create global state
    const [cart, setCart] = useState([])

    /* useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedDarkMode = localStorage.getItem('darkMode')
            //console.log(typeof(storedDarkMode))
            if (storedDarkMode) {
                //use this to initalize State
                setDarkMode(JSON.parse(storedDarkMode))
            }
        }, [] //runs once when context loads
    )

    useEffect(
        ()=>{
            console.log('darkMode now ', darkMode)
            //save value anytime it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode] //runs anytime darkMode changes
    ) */


    const addProduct = (productToAdd) =>{
        console.log('add', productToAdd)
        //add productToAdd to cart
        let newCart = [...cart, productToAdd]
        //update state
        setCart(newCart)
    }
    
    return (
        <CartContext.Provider value={{cart, addProduct, }} >
            {props.children}
        </CartContext.Provider>
    )
}
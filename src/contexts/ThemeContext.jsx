import {useState, createContext, useEffect} from 'react'

//create this context
export const ThemeContext = createContext()

//create provider
export default function ThemeContextProvider(props){
    //create global state
    const [cartContext, setcartContext] = useState(false)

    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedcartContext = localStorage.getItem('cartContext')
            //console.log(typeof(storedDarkMode))
            if (storedcartContext) {
                //use this to initalize State
                setcartContext(JSON.parse(storedcartContext))
            }
        }, [] //runs once when context loads
    )

    useEffect(
        ()=>{
            console.log('cart now ', cartContext)
            //save value anytime it changes
            localStorage.setItem('cartContext', JSON.stringify(cartContext))
        }, [cartContext] //runs anytime darkMode changes
    )

    return (
        <ThemeContext.Provider value={{cartContext, setcartContext}} >
            {props.children}
        </ThemeContext.Provider>
    )
}
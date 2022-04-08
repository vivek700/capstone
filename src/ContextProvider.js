import { createContext, useEffect, useState } from "react";

const Context = createContext()



function ContextProvider(props) {

    const [Photos, setPhotos] = useState([])

    const [buttonText, setButtonText] = useState("Place Order") 


    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
         // Get the data from the api
        // save the data to state
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setPhotos(data))
        .catch(err => console.log(err))
    },[])
    // console.log(cartItems)

    // handle favorite items
    function toggleFavorite(id) {
        const newArray = Photos.map(photo => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo)
        
        setPhotos(newArray)

    }

    // add newitems to the cart
    function handleCartItems(newItems) {
        // console.log(newItems)
        const checkitems = cartItems.find(item => item.id === newItems.id)

        if (checkitems) {
            const cartArray = cartItems.filter(cartItems => cartItems.id !== newItems.id)
            setCartItems(cartArray)
        } else {
            setCartItems(prevItems => [...prevItems, newItems])
        }
    
    }

    // handle placing order
    function handleOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            setCartItems([])
        },3000)

    }
    


    return(
        <Context.Provider value={{Photos, toggleFavorite, handleCartItems, cartItems, handleOrder, buttonText}}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider , Context}
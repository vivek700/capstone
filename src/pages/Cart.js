import React, { useContext } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../ContextProvider"


function Cart() {

    const {cartItems, handleCartItems, handleOrder, buttonText} = useContext(Context)

    const cartElement = cartItems.map(item => <CartItem key={item.id} item = {item} handleCartItems = {handleCartItems} /> )

    const totalCost = cartItems.length * 250


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElement}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})} </p>
            {
                cartItems.length > 0 ? 
                    <div className="order-button">
                        <button onClick={handleOrder}> {buttonText}</button>
                    </div> :  
                    <p>You have no items in your cart.</p> 
            }
           
        </main>
    )
}

export default Cart
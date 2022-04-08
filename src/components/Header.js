import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from "../ContextProvider"


function Header() {
    const { cartItems } = useContext(Context)

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartItems.length === 0 ? "line" : "fill"} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Header

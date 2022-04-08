import { useContext } from "react"
import { PropTypes } from 'prop-types'
import { Context } from "../ContextProvider"
import useHover from "../hooks/useHover"



export default function Image({ className, img, toggleFavorite }) {
    // console.log(toggleFavorite)


    const [hovered, refElement] = useHover()

    const { handleCartItems, cartItems } = useContext(Context)



    const heartIcon = (hovered || img.isFavorite) && <i onClick={() => toggleFavorite(img.id)}
        className={`${img.isFavorite ? "ri-heart-fill" : "ri-heart-line"} favorite`}
    >
    </i>
    const cartIcon = hovered && <i onClick={() => handleCartItems(img)}
        className={`${cartItems.find(item => item.id === img.id) ? "ri-shopping-cart-fill" : "ri-add-circle-line"} cart`}
    >
    </i>





    // console.log(hoverd)

    return (
        <div ref={refElement} className={`${className} image-container`}>
            <img alt="images" src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>

    )
}

Image.propTypes = {
    className: PropTypes.string,
    toggleFavorite: PropTypes.func,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

import useHover from "../hooks/useHover"

function CartItem({item, handleCartItems}) {

    const [hovered, refElement] = useHover()

    return (
        <div className="cart-item">
            <i onClick={() => handleCartItems(item)} ref = {refElement} className={`ri-delete-bin-${hovered ? "fill" : "line"}`}></i>
            <img alt="images" src={item.url} width="130px" />
            <p>₹250</p>
        </div>
    )
}

export default CartItem
import { CartIcon } from "./CartWidget-Styled";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../../hook/useCartContext";


export function CartWidget () {

    const { items, totalQty } = useCartContext()

    return(
        <CartIcon to={"/cart"}>
            <FiShoppingCart />
            { items.length < 1 ? "" : <span>{totalQty()}</span> }
        </CartIcon>
    )
}
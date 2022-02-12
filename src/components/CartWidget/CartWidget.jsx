import { CartIcon } from "./CartWidget-Styled";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../../hook/useCartContext";


export function CartWidget () {

    const { items } = useCartContext()
    return(
        <CartIcon>
            <FiShoppingCart />
            <span>{items.length}</span>
        </CartIcon>
    )
}
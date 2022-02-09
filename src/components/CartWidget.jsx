import { CartIcon } from "./CartWidget-Styled";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/CartContext";


export default function CartWidget () {

    const { items } = useCartContext()
    
    
    return(
        <CartIcon>
            <FiShoppingCart />
            <span>{ items.length }</span>
        </CartIcon>
    )
}
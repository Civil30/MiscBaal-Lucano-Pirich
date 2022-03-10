import { EmptyCart } from "components/Cart/EmptyCart"
import { CartList } from "components/Cart/CartList"
import { CartTitle } from "./CartContainer-Styled"
import { useCartContext } from "hook/useCartContext"


export function CartContainer () {

    const { items } = useCartContext()

    return (
        <>
            <CartTitle>Mí carrito</CartTitle>
            { items.length < 1 ? <EmptyCart /> : <CartList /> }
        </>
    )
}
import { useContext } from "react"
import { CartContext } from "context/CartContext"

export function useCartContext () {
    return useContext(CartContext)
}

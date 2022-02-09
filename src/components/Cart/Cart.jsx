import { useCartContext } from "../../context/CartContext"


export default function Cart () {

    const { removeItem, clear } = useCartContext()
    console.log(clear)

    return (
        <>
            <h1>Carrito de compras</h1>
            <button onClick={clear}>eliminar</button>
        </>
    )
}
import { useCartContext } from "hook/useCartContext"
import { Link } from "react-router-dom"

export function Cart () {

    const { items, clear, removeItem, totalPrice } = useCartContext()
 
    return (
        <>
            <h1>Carrito de compras</h1>
            { items.length < 1
                ? <div>
                    <h2>Tu carrito está vacío</h2>
                    <Link to={"/"}>Ir a productos</Link>
                </div>
                : <div>
                    {
                        items.map( item => {
                            const {title, id, qty, price} = item
                            return (
                                <div key={id}>   
                                    <p>{title}</p>
                                    <p>ID: {id}</p>
                                    <p>Cantidad: {qty}</p>
                                    <p>Precio Unitario $: {price}</p>
                                    <p>Subtotal: $: {price * qty}</p>
                                    <button onClick={() => removeItem(id)}> Eliminar item</button>
                                </div>
                            )
                        })
                    }
                    <h2>Total: $ {totalPrice()}</h2>
                    <button onClick={clear}>Vaciar carrito</button>
                </div>
            }
        </>
    )
}
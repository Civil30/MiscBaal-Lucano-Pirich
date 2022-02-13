import { useCartContext } from "hook/useCartContext"
// import { useState } from "react"

export function Cart () {

    const { items, clear, removeItem, totalPrice } = useCartContext()
    console.log(totalPrice())
 
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                items.map( item => {
                    const {title, id, qty, price} = item
                    return (
                        <div>   
                            <li>{title}</li>
                            <li>ID: { id }</li>
                            <li>Cantidad: {qty}</li>
                            <li>Precio Unitario $: {price}</li>
                            <li>Subtotal: $: {price * qty}</li>
                            <button onClick={() => removeItem(id)}> Eliminar item</button>
                        </div>
                    )
                })
            }
            <h2>Total: $ {totalPrice()}</h2>
            <button onClick={clear}>Vaciar carrito</button>
        </>
    )
}
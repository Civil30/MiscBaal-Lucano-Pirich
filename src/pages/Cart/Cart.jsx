import { useCartContext } from "hook/useCartContext"
// import { useState } from "react"

export function Cart () {

    const { items, clear, removeItem } = useCartContext()
 
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                items.map( item => {
                    const {title, id, qty} = item
                    return <> 
                        <div>
                            <li>{title}</li>
                            <li>ID: { id }</li>
                            <li>Cantidad: {qty}</li>
                            <button onClick={() => removeItem(id)}> Eliminar item</button>
                        </div>
                    </>
                })
            }
            <button onClick={clear}>Vaciar carrito</button>
        </>
    )
}
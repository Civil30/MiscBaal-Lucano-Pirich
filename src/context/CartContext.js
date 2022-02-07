import { createContext, useState } from "react";


const CartContext = createContext([])

export function CartProvider ({ children }) {
    
    const [items, setItems] = useState([])

    function addItem (item, qty) {

    }

    function removeItem (itemId) {
        const filterItem = items.filter( item => item.id !== itemId )
        setItems(filterItem)
    }

    function clear () {
        setItems([])
    }

    function isInCart (id) {

    }

    return (
        <CartContext.Provider value={ items, setItems }>
            { children } 
        </CartContext.Provider>
    )
}
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    
    const [items, setItems] = useState([])
    
    function addItem (item, qty) {
        if (isInCart(item.id)) {
            return
        }

        setItems([...items, item])
    }

    function removeItem (itemId) {
        const filterItem = items.filter( item => item.id !== itemId )
        return setItems(filterItem)
    }

    function clear () {
        setItems([])
    }

    function isInCart (id) {
        return items.find( item => item.id === id)
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
            { children } 
        </CartContext.Provider>
    )
}
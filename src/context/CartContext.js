import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider ({ children }) {
    
    const [items, setItems] = useState([2,3,4])

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
        <CartContext.Provider value={{ items, setItems, addItem, removeItem, clear }}>
            { children } 
        </CartContext.Provider>
    )
}
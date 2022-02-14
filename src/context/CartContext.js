import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    
    const [items, setItems] = useState([])    

    function addItem (item) {
        const { qty, id } = item
        
        if (!isInCart(id)) {
            return setItems([...items, item])
        }
        
        items.forEach( item => {
            const limitQty = Math.min(item.qty + qty, item.stock)
            
            if (item.id === id ) {
                item.qty = limitQty
            }
        })
        setItems([...items])
        
    }

    function removeItem (itemId) {
        const filterItem = items.filter( item => item.id !== itemId )
        setItems(filterItem)
    }

    function clear () {
        setItems([])
    }

    function isInCart (id) {
        return items.find( item => item.id === id)
    }

    function totalQty () {
        let res = 0
        items.forEach( item => res += item.qty)
        return res
    }

    function totalPrice () {
        let res = 0
        items.forEach( item => res += item.qty * item.price)
        return res
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear, totalQty, totalPrice }}>
            { children } 
        </CartContext.Provider>
    )
}

// if ( isInCart(item.id) ){
            
    // const addNewQty = items.map( oldItem => ({
    //     ...oldItem, qty: (oldItem.qty + qty) 
    // }))

    // return setItems(addNewQty)
// } 
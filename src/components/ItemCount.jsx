import { useState } from "react"
import { ItemCountContainer, ItemStock, Qty, QtyControlsBtn, QtyControlsContainer, QtyAndCartContainer, AddCartBtn } from "./ItemCount-Styled"

export default function ItemCount ({ stock, initial, onAdd }) {
    
    const [qty, setQty] = useState (initial)

    function increaseQty () {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    function decreaseQty () {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    function addCart () {
        onAdd(qty)
    }

    return (
        <ItemCountContainer>
            
            <ItemStock> Disponibles: {stock} </ItemStock>
            
            <QtyAndCartContainer>
                <QtyControlsContainer>
                    <QtyControlsBtn onClick={decreaseQty}> - </QtyControlsBtn>
                    <Qty> {qty} </Qty>
                    <QtyControlsBtn onClick={increaseQty}> + </QtyControlsBtn>
                </QtyControlsContainer>
                <AddCartBtn onClick={addCart}> Agregar al carrito </AddCartBtn>
            </QtyAndCartContainer>
        </ItemCountContainer>
    )
}
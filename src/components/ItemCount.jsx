import { useState } from "react"
import { ItemCountContainer, ItemInfo, ItemName, ItemStock, Qty, QtyControlsBtn, QtyControlsContainer, QtyAndCartContainer, AddCartBtn } from "./ItemCount-Styled"

export default function ItemCount ({ stock, initial, onAdd }) {
    
    const [qty, setQty] = useState(initial)

    function increaseQty () {
        if (qty < stock){
            setQty(qty + 1)
        }
    }

    function decreaseQty () {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }
    
    return (
        <ItemCountContainer>
            <ItemInfo>
                <ItemName>Producto de ejemplo</ItemName>
                <ItemStock>Disponibles: {stock}</ItemStock>
            </ItemInfo>
            <QtyAndCartContainer>
                <QtyControlsContainer>
                    <QtyControlsBtn onClick={increaseQty}>+</QtyControlsBtn>
                    <Qty>{qty}</Qty>
                    <QtyControlsBtn onClick={decreaseQty}>-</QtyControlsBtn>
                </QtyControlsContainer>
                <AddCartBtn onClick={onAdd} >Agregar al carrito</AddCartBtn>
            </QtyAndCartContainer>
        </ItemCountContainer>
    )
}
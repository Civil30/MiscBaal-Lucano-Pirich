import { useState } from "react"
import { ItemCountContainer, ItemInfo, ItemName, ItemStock, Qty, QtyControlsBtn, QtyControlsContainer, QtyAndCartContainer, AddCartBtn } from "./ItemCount-Styled"

export default function ItemCount ({ stock, initial, onAdd }) {
    
    const [qty, setQty] = useState (initial)

    function increaseQty () {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    function decreaseQty () {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    function addCart (e) {
        if (stock === 0 || qty === 0) return ;
        console.log("Agregado al carrito")
    }

    return (
        <ItemCountContainer>
            <ItemInfo>
                <ItemName> Producto de ejemplo </ItemName>
                <ItemStock> Disponibles: {stock} </ItemStock>
            </ItemInfo>
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
import { ItemCountContainer, ItemStock, Qty, QtyControlsBtn, QtyControlsContainer, QtyAndCartContainer, AddCartBtn } from "components/ItemCount/ItemCount-Styled"

export function ItemCount ({ stock, initial, setQty, addCart }) {
    
    function increaseQty () {
        if (initial < stock) {
            setQty(initial + 1)
        }
    }

    function decreaseQty () {
        if (initial > 1) {
            setQty(initial - 1)
        }
    }

    return (
        <ItemCountContainer>
            
            <ItemStock> Disponibles: {stock} </ItemStock>
            
            <QtyAndCartContainer>
                <QtyControlsContainer>
                    <QtyControlsBtn onClick={decreaseQty}> - </QtyControlsBtn>
                    <Qty> {initial} </Qty>
                    <QtyControlsBtn onClick={increaseQty}> + </QtyControlsBtn>
                </QtyControlsContainer>
                <AddCartBtn onClick={addCart}> Agregar al carrito </AddCartBtn>
            </QtyAndCartContainer>
        </ItemCountContainer>
    )
}
import { RiDeleteBinLine } from "react-icons/ri"
import { useCartContext } from "hook/useCartContext"
import { Container, ItemListContainer, ItemListInCart, ImgContainer, ItemInfo, EmptyBtn, Total, GoCheckout, BtnsContainer } from "components/Cart/CartList-Styled"

export function CartList () {

    const { items, clear, removeItem, totalPrice } = useCartContext()

    return ( 
        <Container>
            <ItemListContainer>
                {
                    items.map( item => {
                        const {title, id, qty, price, pictureUrl} = item
                        return (
                            <ItemListInCart key={id}>
                                <ImgContainer>
                                    <img src={pictureUrl} alt="item" />   
                                </ImgContainer>
                                <ItemInfo>
                                    <h3>{title}</h3>
                                    <p>Cantidad: {qty}</p>
                                    <p>Precio Unitario: $ {price}</p>
                                    <p>Subtotal: <span>$ {price * qty}</span></p>
                                </ItemInfo>
                                <RiDeleteBinLine onClick={() => removeItem(id)} />
                            </ItemListInCart>
                        )
                    })
                }
            </ItemListContainer>
            <Total>Total: $ {totalPrice()}</Total>
            <BtnsContainer>
                <EmptyBtn onClick={clear}>Vaciar carrito</EmptyBtn>
                <GoCheckout to={"/checkout"}>Ir al Checkout</GoCheckout>
            </BtnsContainer>
        </Container>
    )
}
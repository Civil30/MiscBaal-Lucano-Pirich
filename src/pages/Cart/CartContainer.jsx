import { EmptyCart } from "components/Cart/EmptyCart"
import { CartList } from "components/Cart/CartList"
import { CartTitle } from "./CartContainer-Styled"
import { useCartContext } from "hook/useCartContext"


export function CartContainer () {

    const { items } = useCartContext()

    return (
        <>
            <CartTitle>Mí carrito</CartTitle>
            { items.length < 1 ? <EmptyCart /> : <CartList /> }
        </>
    )
}

/* <CartTitle>Mí carrito</CartTitle>
            { items.length < 1
                ? <div>
                    <h2>Tu carrito está vacío</h2>
                    <Link to={"/"}>Ir a productos</Link>
                </div>
                : <Container>
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
            } */
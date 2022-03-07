import { GridContainer, Img, DataContainer, TitleWrapper, Title, DetailWrapper, Price, LiSmallSize, TitleH3, Ul, SpanId, BtnBuy, BtnsContainer, WrapperBtns, } from "components/ItemDetail/ItemDetail-Styled"
import { ItemCount } from "components/ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "hook/useCartContext"

export function ItemDetail ({ item }) {

    const { id, stock, title, price, pictureUrl, description, features = [], details = [] } = item

    const [ qty, setQty ] = useState(1)
    const [ btn, setBtn ] = useState(false)

    const { addItem } = useCartContext()

    function addCart () {
        addItem({ title, qty, id, price, stock, pictureUrl })
        setBtn(true)
    }
        
    return (
        <GridContainer>
            <Img src={pictureUrl} alt="poke-img" />
            <DataContainer>
                <TitleWrapper>    
                    <Title>{title}</Title>
                    <Price>$ {price}</Price>
                </TitleWrapper>
                <WrapperBtns>
                    <ItemCount stock={stock} initial={qty} setQty={setQty} addCart={addCart} />
                    <BtnsContainer $showbtn={btn} >
                        <BtnBuy to={"/"}>Ir a productos</BtnBuy>   
                        <BtnBuy $cart to={"/cart"}>Ir al carrito</BtnBuy>   
                    </BtnsContainer>
                </WrapperBtns>
            </DataContainer>
            <DetailWrapper>
                <h2>Detalles</h2>
                <p>{description}</p>
                <Ul> 
                    { features.map( feature => <li key={feature}>{feature}</li> ) }
                </Ul>   
                <TitleH3>Más detalles</TitleH3>
                <Ul> 
                    { details.map( detail => <LiSmallSize key={detail}>{detail}</LiSmallSize> ) } 
                </Ul>
                <SpanId>ID: {id}</SpanId>
            </DetailWrapper>
        </GridContainer>
    )
}
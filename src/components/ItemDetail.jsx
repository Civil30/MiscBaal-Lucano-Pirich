import { GridContainer, Img, DataContainer, TitleWrapper, Title, DetailWrapper, Price, LiSmallSize, TitleH3, Ul, SpanId, BtnBuy, } from "./ItemDetail-Styled"
import ItemCount from "./ItemCount"
import { useState } from "react/cjs/react.development"

export default function ItemDetail ({ item }) {

    const { id, stock, title, price, pictureUrl, description, features, details } = item

    const [btn, setBtn] = useState(false)

    function onAdd (e) {
        console.log("Agregado al carrito")
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
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                <BtnBuy showbtn={btn} to={"/cart"}>Ir al carrito</BtnBuy>   
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
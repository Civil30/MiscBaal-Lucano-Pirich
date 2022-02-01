import { GridContainer, Img, DataContainer, TitleWrapper, Title, DetailWrapper, Price, LiSmallSize, TitleH3, Ul, SpanId, } from "./ItemDetail-Styled"
import ItemCount from "./ItemCount"

export default function ItemDetail ({ item }) {

    const { id, stock, title, price, pictureUrl, description, features, details } = item

    return (
        <GridContainer>
            <Img src={pictureUrl} alt="poke-img" />
            <DataContainer>
                <TitleWrapper>    
                    <Title>{title}</Title>
                    <Price>$ {price}</Price>
                </TitleWrapper>
                <ItemCount stock={stock} initial={0} />
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
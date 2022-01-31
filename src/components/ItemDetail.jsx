import { GridContainer, Img, DataContainer, TitleWrapper, Title, DetailWrapper, Price, } from "./ItemDetail-Styled"
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
                { features.map( feature => <li key={feature}>{feature}</li> ) }    
                <h3>Más detalles</h3>
                { details.map( detail => <li key={detail}>{detail}</li> ) }
                <span>ID: {id}</span>
            </DetailWrapper>
        </GridContainer>
    )
}
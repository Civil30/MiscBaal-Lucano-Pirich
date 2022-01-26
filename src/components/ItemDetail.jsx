import { GridContainer, Img, DataContainer, TitleWrapper, Title, DetailWrapper, Price, } from "./ItemDetail-Styled"
import ItemCount from "./ItemCount"

export default function ItemDetail ({ item }) {

    const { id, stock, title, price, pictureUrl, detail } = item

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
                <p>{detail}</p>
                <span>ID: {id}</span>
            </DetailWrapper>
        </GridContainer>
    )
}
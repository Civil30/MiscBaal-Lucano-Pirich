import { Card, Img, Title, Price, ImgContainer } from "components/ItemList/Item-Styled"

export function Item ({ item }) {

    const { id, title, price, pictureUrl } = item

    return(
        <Card to={`/item/${id}`}>
            <ImgContainer>
                <Img src={pictureUrl} />
            </ImgContainer>
            <Title>{title}</Title>
            <Price>$ {price}</Price>
        </Card>
    )
}
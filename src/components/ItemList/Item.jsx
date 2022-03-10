import { Card, Img, Title, Price, ImgContainer } from "components/ItemList/Item-Styled"

export function Item ({ item }) {

    const { id, title, price, picturesUrl } = item

    return(
        <Card to={`/item/${id}`}>
            <ImgContainer>
                <Img src={picturesUrl[0]} />
            </ImgContainer>
            <Title>{title}</Title>
            <Price>$ {price}</Price>
        </Card>
    )
}
import { Card, Img, Title, Id, Price } from "./Item-Styled"

export function Item ({ item }) {

    const { id, title, price, pictureUrl } = item

    return(
        <Card to={`/item/${id}`}>
            <Img src={pictureUrl} />
            <Title>{title}</Title>
            <Id>ID: {id}</Id>
            <Price>$ {price}</Price>
        </Card>
    )
}
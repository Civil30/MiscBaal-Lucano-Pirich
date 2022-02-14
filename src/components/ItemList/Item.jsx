import { Card, Img, Title, Id, Price } from "components/ItemList/Item-Styled"

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
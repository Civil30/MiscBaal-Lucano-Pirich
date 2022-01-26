import { Card, Img, Title, Id, Price } from "./Item-Styled"

export default function Item ({ item }) {

    const { id, title, price, pictureUrl } = item

    return(
        <Card to={`/detail/${id}`}>
            <Img src={pictureUrl} />
            <Title>{title}</Title>
            <Id>ID: {id}</Id>
            <Price>$ {price}</Price>
        </Card>
    )
}
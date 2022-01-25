import { Card, Img, Title, Id } from "./Item-Styled"

export default function Item ({ item }) {
    const { id, title, price, pictureUrl } = item

    return(
        <Card href="#">
            <Img src={pictureUrl}/>
            <Title>{title}</Title>
            <Id>ID: {id}</Id>
            <h1>$ {price}</h1>
        </Card>
    )
}
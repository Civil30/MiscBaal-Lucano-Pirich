import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { getItem } from "../services/fetch";
import { products } from "../products/products";

import { useParams } from "react-router-dom";
import { Container } from "./ItemDetailContainer-Styled";

export default function ItemDetailContainer () {
    
    const [item, setItem] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => { 
            setTimeout(() => {
                resolve(products.find( item => item.id.toString() === id))
            }, 2000)
        })
        getItem.then(item => setItem(item))
    },[id])

    return (
        <Container>
            <ItemDetail item={item} />
        </Container>
    )
}
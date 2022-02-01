import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./ItemDetailContainer-Styled";
import { getItem } from "../services/fetch";
import SkeletonDetails from "./Skeletons/SkeletonDetails";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        getItem(id).then( item => setItem(item))
        
        setTimeout(() => {
           setLoading(false) 
        }, 2000);
        
    },[id])

    return (
        <Container>
            {
                !loading ? <ItemDetail item={item} /> : <SkeletonDetails />
            }
        </Container>
    )
}


// const getItem = new Promise((resolve, reject) => { 
        //     resolve(products.find( item => {
        //         return item.id.toString() === id
        //     }))
        //     setTimeout(() => {
        //         setLoading(false)
        //     }, 2000)
        // })
        // getItem.then(item => setItem(item))
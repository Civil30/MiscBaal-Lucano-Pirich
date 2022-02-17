import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "pages/ItemDetailContainer/ItemDetailContainer-Styled";
import { getItemFromFirebase } from "services/fetch";
import { SkeletonDetails } from "components/Skeletons/SkeletonDetails";
import { ItemDetail } from "components/ItemDetail/ItemDetail";


export function ItemDetailContainer () {
    
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        getItemFromFirebase(id).then( item => {
            setItem({...item, id: id})
        }).finally( () => setLoading(false))
    
    },[id])
    

    return (
        <Container>
            {
                !loading ? <ItemDetail item={item} /> : <SkeletonDetails />
            }
        </Container>
    )
}
import { useEffect, useState } from 'react'
import { ItemList } from 'components/ItemList/ItemList'
import { getProductsFromFirebase } from 'services/fetch'
import { SkeletonHome } from 'components/Skeletons/SkeletonHome'
import { useParams } from 'react-router-dom'


export function ItemListContainer () {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams()
    
    useEffect(() => {
        setLoading(true)

        getProductsFromFirebase().then( products => {
            if (!category) return setProducts(products)

            const categoryFilter = products.filter( item => item.category === category)
            setProducts(categoryFilter)

        }).finally( () => setLoading(false)) 

    },[category])
    
    
    return (
        <div>
            {
                !loading ? <ItemList products={products}/> : <SkeletonHome />
            }
        </div>
    )
};
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/fetch'
import SkeletonHome from './Skeletons/SkeletonHome'
import { useParams } from 'react-router-dom'


export default function ItemListContainer () {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    
    useEffect(() => {
        getProducts.then( products => {
            setLoading(false)
            
            if (!category) return setProducts(products)

            const categoryFilter = products.filter( item => item.category === category)
            setProducts(categoryFilter)
        })
    },[category])
    
    
    return (
        <div>
            {
                !loading ? <ItemList products={products}/> : <SkeletonHome />
            }
        </div>
    )
};
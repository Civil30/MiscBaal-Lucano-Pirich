// import ItemCount from './ItemCount';
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/fetch'
import SkeletonHome from './Skeletons/SkeletonHome'


export default function ItemListContainer () {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProducts.then( res => {
            setProducts(res)
            setLoading(false)
        })
    },[])

    return (
        <div>
            {
                !loading ? <ItemList products={products}/> : <SkeletonHome />
            }
        </div>
    )
};
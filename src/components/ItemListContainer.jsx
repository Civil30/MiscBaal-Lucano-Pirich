// import ItemCount from './ItemCount';
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/fetch'
import SkeletonHome from './Skeletons/SkeletonHome'
import { useParams } from 'react-router-dom'
import { products } from "../products/products";


export default function ItemListContainer () {
    
    const [productss, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    
    useEffect(() => {
        if (category){
            const lala = products.filter( item => item.category === category)
            setProducts(lala)
            setLoading(false)
        } else {

            getProducts.then( res => {
                setProducts(res)
                setLoading(false)
            })
        }
        
    },[category])
    console.log(productss)
    
    return (
        <div>
            {
                !loading ? <ItemList products={productss}/> : <SkeletonHome />
            }
        </div>
    )
};
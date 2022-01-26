// import ItemCount from './ItemCount';
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/fetch'


export default function ItemListContainer () {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts.then( res => setProducts(res) )
    },[])

    return (
        <div>
            <ItemList products={products}/>
        </div>
        /* <ItemCount stock={5} initial={0} /> */
    )
};
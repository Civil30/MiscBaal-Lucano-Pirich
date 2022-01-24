import { useState, useEffect } from "react";
import Item from "./Item";
import squirtle_thumb from "../assets/img/squirtle/squirtle_thumb.jpg"
import bulbasaur_thumb from "../assets/img/bulbasaur/bulbasaur_thumb.jpg"
import charmander_thumb from "../assets/img/charmander/charmander_thumb.jpg"
import { WrapperCards } from "./ItemList-Styled";

const products = [
    {
        id: 1,
        title: "Bulbasaur peluche",
        price: 3000,
        pictureUrl: bulbasaur_thumb 
    },
    {
        id: 2,
        title: "Squirtle peluche",
        price: 3000,
        pictureUrl: squirtle_thumb
    },
    {
        id: 3,
        title: "Charmander peluche",
        price: 3000,
        pictureUrl: charmander_thumb
    }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})

export default function ItemList () {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts.then( items => setProducts(items) )
    },[])

    return (
        <WrapperCards>
            { products.map( product => <Item item={product} key={product.id} />) }
        </WrapperCards>
    )

}
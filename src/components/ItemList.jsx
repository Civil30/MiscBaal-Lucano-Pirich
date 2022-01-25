import { useState, useEffect } from "react";
import Item from "./Item";
import squirtle_thumb from "../assets/img/squirtle/squirtle_thumb.jpg"
import bulbasaur_thumb from "../assets/img/bulbasaur/bulbasaur_thumb.jpg"
import charmander_thumb from "../assets/img/charmander/charmander_thumb.jpg"
import eevee_thumb from "../assets/img/eevee/eevee_thumb.jpg"
import wooloo_thumb from "../assets/img/wooloo/wooloo_thumb.jpg"
import froakie_thumb from "../assets/img/froakie/froakie_thumb.jpg"
import { WrapperCards } from "./ItemList-Styled";

const products = [
    {
        id: 1,
        title: "Bulbasaur peluche",
        price: 3000,
        pictureUrl: bulbasaur_thumb, 
        detail: ""
    },
    {
        id: 2,
        title: "Squirtle peluche",
        price: 3000,
        pictureUrl: squirtle_thumb,
        detail: ""
    },
    {
        id: 3,
        title: "Charmander peluche",
        price: 3000,
        pictureUrl: charmander_thumb,
        detail: ""
    },
    {
        id: 4,
        title: "Eevee peluche",
        price: 3000,
        pictureUrl: eevee_thumb,
        detail: ""
    },
    {
        id: 5,
        title: "Wooloo peluche",
        price: 3000,
        pictureUrl: wooloo_thumb,
        detail: ""
    },
    {
        id: 6,
        title: "Froakie peluche",
        price: 3000,
        pictureUrl: froakie_thumb,
        detail: ""
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
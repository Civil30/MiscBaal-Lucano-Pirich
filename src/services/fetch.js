import { products } from "../products/products"

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 0)
})

export const getItem = (id) => new Promise ((resolve, reject) => {
    const filterId = products.find( items => items.id.toString() === id)
    resolve(filterId)
})
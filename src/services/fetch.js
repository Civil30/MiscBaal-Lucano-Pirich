import { products } from "../products/products"

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})


// export const getItem = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         resolve(products.find( item => item.id === id))
//     }, 2000)
// })
// export const getItem = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         resolve(products.find( item => item.id === 1))
//     }, 2000)
// })

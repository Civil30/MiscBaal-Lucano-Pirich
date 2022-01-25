

const getItem = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve()
    }, 2000)
})


export default function ItemDetail ({ item }) {
    // const { id, title, price, pictureUrl } = item
    return (
        <>
            <h1>Hola mundo</h1>
        </>
    )
}
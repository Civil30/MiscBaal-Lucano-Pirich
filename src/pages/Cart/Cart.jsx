import { addDoc, collection, Timestamp, writeBatch, getDocs, query, documentId, where } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "hook/useCartContext"
import { Link } from "react-router-dom"
import { db } from "services/firebase"

export function Cart () {

    const [ dataForm, setDataForm ] = useState({ name: "", phone: "", email: "" })
    const [orderId, setOrderId] = useState(null)
    const { items, clear, removeItem, totalPrice } = useCartContext()


    const itemsToBuy = items.map( item =>{
        const { id, title, price, qty } = item
        return ({ id, title, price, qty })
    })
    
    const order = {
        buyer: dataForm,
        items: itemsToBuy,
        date: Timestamp.fromDate(new Date()),
        total: totalPrice()
    }

    function inputValue (evt) {
        setDataForm({...dataForm, [evt.target.name]: evt.target.value})
    }

    async function addOrder () {
        const orderRef = collection(db, "orders")
        const createOrder = await addDoc((orderRef), order)
        setOrderId(createOrder.id)
    }

    async function updateSotck () {
        if (!items.length > 0) return

        const batch = writeBatch(db)
        const queryCollection = collection(db, 'products')
        const q =  query(queryCollection, where( documentId(), "in", itemsToBuy.map( items => items.id)))
        const docSnapshot = await getDocs(q)
        docSnapshot.forEach( items => {
            batch.update(items.ref, {
                stock: items.data().stock - order.items.find(product => product.id === items.id).qty
            })
        })
        await batch.commit()
    }

    function formSubmit (evt) {
        evt.preventDefault()
        addOrder()
        updateSotck()
    }
 
    return (
        <>
            <h1>Carrito de compras</h1>
            { items.length < 1
                ? <div>
                    <h2>Tu carrito está vacío</h2>
                    <Link to={"/"}>Ir a productos</Link>
                </div>
                : <div>
                    {
                        items.map( item => {
                            const {title, id, qty, price} = item
                            return (
                                <div key={id}>   
                                    <p>{title}</p>
                                    <p>ID: {id}</p>
                                    <p>Cantidad: {qty}</p>
                                    <p>Precio Unitario $: {price}</p>
                                    <p>Subtotal: $: {price * qty}</p>
                                    <button onClick={() => removeItem(id)}> Eliminar item</button>
                                </div>
                            )
                        })
                    }
                    <h2>Total: $ {totalPrice()}</h2>
                    <button onClick={clear}>Vaciar carrito</button>

                    <form onSubmit={formSubmit}>
                        <input type="text" name="name" placeholder="Nombre" value={dataForm.name} onChange={inputValue}/>
                        <input type="text" name="phone" placeholder="Teléfono" value={dataForm.phone} onChange={inputValue}/>
                        <input type="text" name="email" placeholder="Correo" value={dataForm.email} onChange={inputValue}/>
                        <button>Terminar compra</button>
                    </form>

                    { orderId  ? <h2>El id de tu orden es:  {orderId}</h2> : null }

                </div>
            }
        </>
    )
}
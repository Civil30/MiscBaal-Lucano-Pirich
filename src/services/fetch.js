import { collection, getDocs, getDoc, doc, addDoc, writeBatch, query, documentId, where } from "firebase/firestore"

import { db } from 'services/firebase'

export async function getProductsFromFirebase () {
    const query = collection(db, "products")
    const snapshot = await getDocs(query)
    const res = snapshot.docs.map( product => {
        return ({ ...product.data(), id: product.id }) 
    })
    return res
}

export async function getItemFromFirebase (id) {
    const docRef = doc(db, "products", id)
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.data()
}

export async function addOrder (order, setOrderId) {
    const orderRef = collection(db, "orders")
    const createOrder = await addDoc((orderRef), order)
    setOrderId(createOrder.id)
}

export async function updateSotck (items, itemsToBuy, order) {
    if (!items.length > 0) return

    const batch = writeBatch(db)
    const queryCollection = collection(db, 'products')
    const q = query(queryCollection, where( documentId(), "in", itemsToBuy.map( items => items.id)))
    const docSnapshot = await getDocs(q)
    docSnapshot.forEach( items => {
        batch.update(items.ref, {
            stock: items.data().stock - order.items.find(product => product.id === items.id).qty
        })
    })
    await batch.commit()
}
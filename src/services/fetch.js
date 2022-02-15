import { collection, getDocs, getDoc, doc } from "firebase/firestore"
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
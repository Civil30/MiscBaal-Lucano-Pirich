import { Timestamp } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "hook/useCartContext"
import { addOrder, updateSotck } from "services/fetch"
import { BtnForm, Form, Input, Title, Container, Errormsg, Order } from "./Checkout-Styled"

export function Checkout () {

    const [ dataForm, setDataForm ] = useState({ name: "", phone: "", email: "" })
    const [ validDataForm, setValidDataForm ] = useState({ ...dataForm, reEmail: "" })
    const [ errors, setErrors ] = useState(false)
    const [ orderId, setOrderId ] = useState(null)

    const { items, totalPrice, clear } = useCartContext()


    const itemsToBuy = items.map( item => {
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
        setDataForm({...dataForm, [evt.target.name]: evt.target.value })
    }

    function validateForm (evt) {
        setValidDataForm({ ...dataForm, [evt.target.name]: evt.target.value })
    }

    async function formSubmit (evt) {
        evt.preventDefault()

        const { reEmail } = validDataForm
        const { email } = dataForm

        if (reEmail !== email) return setErrors(true)

        await addOrder(order, setOrderId)
        await updateSotck(items, itemsToBuy, order)
        setErrors(false)
        clear()
    }

    return (
        <Container>
            <Title>Completá tus datos</Title>
            <Form onSubmit={formSubmit}>
                <Input type="text" name="name" placeholder="Nombre" value={dataForm.name} onChange={inputValue}/>
                <Input type="tel" name="phone" placeholder="Teléfono" value={dataForm.phone} onChange={inputValue}/>
                <Input type="email" name="email" placeholder="Email" value={dataForm.email} onChange={inputValue} required/>
                <Input type="email" name="reEmail" placeholder="Repetí tu email" onChange={validateForm} required/>
                <BtnForm>Finalizar compra</BtnForm>
                {errors && <Errormsg>Error: Los mails deben ser iguales.</Errormsg> }
            </Form>

            { orderId && <Order> Pedido completado, felicitaciones por tu compra. El id de tu orden es: {orderId}</Order> }
        </Container>
    )
}
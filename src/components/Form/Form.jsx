import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"

export const Form = ({ formData, setFormData, saveChanges, errors, validForm}) => {
  const {cartList, totalToPay, emptyCart} = useCartContext()

  const finishOrder = (e)=>{
    e.preventDefault()

    if (validForm()) {
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({name, id, price, amount})=>({name, id, price, amount}))
        order.total = totalToPay()

        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')

        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        .finally(() => {
          setFormData({name: "", lastName: "", phone: "", email: "", emailV: ""})

          setTimeout(()=>{
            emptyCart()
          },3000)

        }
        )
        console.log('orden generada')
      }
  
  }
  
  return (
    <form className="formFinal" onSubmit={finishOrder}>
    <h2>Ingresa tus datos para finalizar el pedido</h2>
      <input
        className="campo"
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        onChange={saveChanges}
        value={formData.name}
        />
        {errors && errors.name && <span>{errors.name}</span>}
        <input
        className="campo"
        type="text"
        name="lastName"
        placeholder="Ingresa tu apellido"
        onChange={saveChanges}
        value={formData.lastName}
        />
        {errors && errors.lastName && <span>{errors.lastName}</span>}
        <input
        className="campo"
        type="text"
        name="phone"
        placeholder="Ingresa tu número de teléfono"
        onChange={saveChanges}
        value={formData.phone}
        />
        {errors && errors.phone && <span>{errors.phone}</span>}
        <input
        className="campo"
        type="email"
        name="email"
        placeholder="Ingresa tu email"
        onChange={saveChanges}
        value={formData.email}
        />
        {errors && errors.email && <span>{errors.email}</span>}
        <input
        className="campo"
        type="email"
        name="emailV"
        placeholder="Repite tu email"
        onChange={saveChanges}
        value={formData.emailV}
        />
        {errors && errors.emailV && <span>{errors.emailV}</span>}
        <button className="btnEnviar">Terminar pedido</button>
    </form>
  )
}

import { useCartContext } from "../../context/cartContext"
import { FormContainer } from "../FormContainer/FormContainer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const CartContainer = () => {
    const {cartList, emptyCart} = useCartContext()

  return (
    <>
    <div>
      {cartList.map(prod =>(
        <div className="cardCart">
          <img src={prod.photo} alt='imagen del producto seleccionado'/>
          <label>Precio: {prod.price}€</label>
          <label>Cantidad: {prod.amount}</label>
          <button className="btnRemove">
          <FontAwesomeIcon icon={faTrash}/>
          </button>
        </div>
      ))}
      <button onClick={emptyCart} className="btnDeleteAll">Vaciar carrito</button>
    </div>
    <FormContainer/>
    </>
  )
}

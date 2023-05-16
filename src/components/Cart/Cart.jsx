import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {
    const { cartList, emptyCart, totalToPay, deleteProduct } = useCartContext();

    return (
        <>
        <div className="cart">
            <div className="headerCardCart">
                <h4>Precio</h4>
                <h4>Cantidad</h4>
                <h4>Subtotal</h4>
            </div>
            <div>
                {cartList.map((prod) => (
                <div className="cardCart">
                    <img src={prod.photo} alt="imagen del producto seleccionado"/>
                    <label>Precio: {prod.price}€</label>
                    <label>Cantidad: {prod.amount}</label>
                    <label>Subtotal: {prod.price * prod.amount}€</label>
                    <button onClick={() => deleteProduct(prod.id)} className="btnRemove">
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                ))}
                <div className="footerCardCart">
                <h4>Total a pagar: {totalToPay()}€</h4>
                    <div className="btnsCart">
                        <button onClick={emptyCart} className="btnEmpty">Vaciar carrito</button>
                        <Link to="/" className="btnContinue">Seguir comprando</Link>
                        <Link to="/finish" className="btnFinish">Realizar pago</Link>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(false)
  const {addToCart} = useCartContext()

  const notifyAdd = () => 
toast.info('Producto agregado 😋', {
position: "bottom-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
icon: false,
theme: "color",
});

  const onAdd = (amount) => {
    addToCart({...product, amount})
    setQuantity(true)
    notifyAdd()
  };


  return (
    <div key={product.id} className="cardsDetail">
      <div className="cardBody">
        <div className="imgDet">
          <img
            src={product.photo}
            className="picDetail"
            alt="imagen golosina card"
          />
        </div>
        <div className="infoDet">
          <h3>{product.name}</h3>
          <label>Precio: {product.price}€</label>
          <label>Detalle: {product.description}</label>
        </div>
      </div>
      <div className="cardFooter">
      {!quantity ? 
          <ItemCount onAdd={onAdd} />
        : 
        <>
        <Link to='/' className="btnContinue">Seguir comprando</Link>
        <Link to='/cart' className="btnFinish">Terminar compra</Link>
        </>
        }
      </div>
      <ToastContainer/>
    </div>
  )
}

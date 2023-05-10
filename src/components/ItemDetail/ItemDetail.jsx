import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"

export const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(false)

  const onAdd = (cantidad) => {
    console.log("cantidad seleccionada: ", cantidad)
    setQuantity(true)
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
      {
        !quantity ? 
          <ItemCount onAdd={onAdd} />
        : 
        <>
        
        <Link to='/' className="btnContinue">Seguir comprando</Link>
        <Link to='/cart' className="btnFinish">Terminar compra</Link>
        </>
        }
      </div>
    </div>
  )
}

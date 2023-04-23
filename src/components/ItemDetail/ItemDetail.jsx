import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({ product }) => {

  return (
    <div key={product.id} className="cardsDetail">
      <div className="cardBody">
        <div className="imgDet">
          <img src={product.photo} className="cardPicDetail" alt="imagen golosina card" />
        </div>
        <div className="infoDet">
          <h3>{product.name}</h3>
          <label>Precio: {product.price}€</label>
          <label>Detalle: {product.description}</label>
        </div>
      </div>

      <div className="cardFooter">
        <ItemCount/>
      </div>
    </div>
  )

}

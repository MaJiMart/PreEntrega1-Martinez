import { useEffect, useState } from "react";
import { mockeProducts } from "../../utilities/mockeProducts";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    mockeProducts()
      .then(resultado => { setProducts(resultado) })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])


  return (

    <div className="cardsContainer">

      {isLoading ?
        <h2>Cargando...</h2>
        :
        products.map(({ id, photo, name, price, category }) =>
          <div key={id} className="cards">
            <img src={photo} className="card-pic" alt="imagen card" />
            <h3>{name}</h3>
            <label>Precio: {price}€</label>
            <label>Categoría: {category}</label>

            <div className="card-footer">
              <button className="btnDetalle">Detalle</button>
            </div>
          </div>
        )
      }

    </div>

  )
}
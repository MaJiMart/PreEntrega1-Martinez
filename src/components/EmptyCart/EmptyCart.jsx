import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <div>
          <h1 className="empCart">Tu carrito está vacio</h1>
          <Link to={"/"} className="btnBack">
            <img src="/public/logoSolo.png"></img>
            <h5>Volver al inicio</h5>
          </Link>
        </div>
  )
}

export const Item = () => {
  return (
    <div key={id} className="cards">
      <img src={photo} className="card-pic" alt="imagen card" />
      <div className="card-body">
        <h6>Nombre: {name}</h6>
        <label>Precio: {price}</label>
        <label>Categoria: {category}</label>
      </div>
      <div className="card-footer">
        <button className="btnDetalle">Detalle</button>
      </div>
    </div>
  )
}

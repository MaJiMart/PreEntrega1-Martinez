import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mockProducts } from "../../data/mockProducts"

export const ItemDetailCountainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { prod } = useParams()

  useEffect(() => {
    mockProducts(prod)
      .then(resultado => setProduct(resultado))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="detailCont">
      {isLoading ?
        <h2>Cargando...</h2>
        :
        <ItemDetail product={product} />
      }
    </div>
  )
}

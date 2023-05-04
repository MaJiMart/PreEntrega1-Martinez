import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"



export const ItemDetailCountainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { prod } = useParams()

/*   useEffect(() => {
    mockProducts(prod)
      .then(resultado => setProduct(resultado))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, []) */

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc (dbFirestore, 'products', prod)

    getDoc(queryDoc)
      .then(resp=> setProduct({id: resp.id, ...resp.data()}))
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

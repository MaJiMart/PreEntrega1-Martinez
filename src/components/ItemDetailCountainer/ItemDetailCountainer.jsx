import {doc, getDoc, getFirestore} from "firebase/firestore"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { IsLoading } from "../IsLoading/IsLoading"

import { useParams } from "react-router-dom"

export const ItemDetailCountainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { prod } = useParams()

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
        <IsLoading/>
        :
        <ItemDetail product={product} />
      }
    </div>
  )
}

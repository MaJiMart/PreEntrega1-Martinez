import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";
import { IsLoading } from "../IsLoading/IsLoading";


import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {category} = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'products')

    if (!category) {
    getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
    }else{
      const filterQueryCollec = query(queryCollection, where('category', '==', category))

      getDocs(filterQueryCollec)
      .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
    }
  }, [category])

  return (
    <>
      {isLoading ?
        <IsLoading/>
        :
        <ItemList products={products} />
      }
    </>
  )
}

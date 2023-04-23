import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailCountainer = () => {
  const {prod} = useParams()


  return (
    <div>
      <ItemDetail /* product={product} *//>
    </div>
  )
}

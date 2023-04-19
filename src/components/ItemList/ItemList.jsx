import { Item } from "../Item/Item"

export const ItemList = () => {
  return (
    products.map(({ id, photo, name, price, category }) => <Item/>
    )
  )
}

import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
  return (
    <div className="cardsContainer">
          {products.map((product) => 
          <Item 
            key={product.id} 
            id={product.id} 
            photo={product.photo} 
            name={product.name} 
            price={product.price} 
            category={product.category}
          />
        )
      }
    </div>
  )
}

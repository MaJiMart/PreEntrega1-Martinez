import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProv = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        //agregar logica de producto repetido
    setCartList([...cartList, newProduct])
    }

    const emptyCart =()=>{
        setCartList([])
    }

    //cantidad total de productos
    //precio total de la compra
    //eliminar por item

    return (
    <CartContext.Provider
        value={{
        cartList,
        addToCart,
        emptyCart
        }}>
        {children}
    </CartContext.Provider>
    );
};

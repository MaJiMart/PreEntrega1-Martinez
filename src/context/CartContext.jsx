import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProv = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {

        const index = cartList.findIndex(prod => newProduct.id === prod.id)

        if (index === -1) {
            setCartList([...cartList, newProduct])
        }else{
            cartList[index].amount += newProduct.amount
            setCartList([...cartList])
        }
    }

    const emptyCart =()=>{
        setCartList([])
    }

    const totalToPay = ()=> cartList.reduce((total, productOb)=>total += (productOb.amount*productOb.price),0)

    const totalAmount = ()=> cartList.reduce((total, prodOb)=> total += prodOb.amount,0)

    const deleteProduct = (prod) =>{
        const item = cartList.filter(product=> product.id !== prod)
        setCartList (item)
    }

    return (
    <CartContext.Provider
        value={{
        cartList,
        addToCart,
        emptyCart,
        totalToPay,
        totalAmount,
        deleteProduct
        }}>
        {children}
    </CartContext.Provider>
    );
};

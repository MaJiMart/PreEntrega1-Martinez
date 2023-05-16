import { createContext, useContext, useState } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext([])

const notifyDelete = () => 
toast.info('Producto eliminado', {
position: "bottom-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
icon: false,
theme: "color",
});

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
        notifyDelete()
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

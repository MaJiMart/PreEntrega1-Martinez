import { useCartContext } from "../../context/CartContext";
import { Cart } from "../Cart/Cart";

import { EmptyCart } from "../EmptyCart/EmptyCart";

export const CartContainer = () => {
  const {cartList} = useCartContext();

return (
    <div>
      {cartList.length !== 0 ? (
        <Cart/>
      ) : (
        <EmptyCart/>
      )}
    </div>
  );
};

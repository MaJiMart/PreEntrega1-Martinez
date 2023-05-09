import { useCounter } from "../../hook/useCounter";
import { BtnAddCart } from "../BtnAddCart/BtnAddCart";

export const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
  const { counter, countDown, countUp } = useCounter(initial, 1, stock);

  return (
    <div className="counter">
      <div>
        <button className="btnCounter" onClick={countDown}>
          -
        </button>
        <label className="numCounter">{counter}</label>
        <button className="btnCounter" onClick={countUp}>
          +
        </button>
      </div>
      <div>
        <BtnAddCart />
      </div>
    </div>
  );
};

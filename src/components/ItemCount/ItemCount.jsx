import { useCounter } from "../../hook/useCounter"

export const ItemCount = ({initial=1, stock=5}) => {
const {counter, countDown, countUp} = useCounter(initial, 1, stock)


  return (
    <div className="counter">
        <div>
        <button className="btnCounter" onClick={countDown}>-</button>
        <label className="numCounter">{counter}</label>
        <button className="btnCounter" onClick={countUp}>+</button>
        </div>
        <div>
        <button className="btnAdd">Agregar al carrito</button>
        </div>
    </div>
  )
}

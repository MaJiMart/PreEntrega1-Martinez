import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
const {totalAmount} = useCartContext()

    return (
        <div className='shop'>
            <Link to={'/cart'}>
            <div className="storeIcon">
                <FontAwesomeIcon icon={faStore} />
            </div>
            </Link>
            <span id='cantidadCarrito'> {totalAmount() !== 0 && totalAmount()} </span>
        </div>

    )
}
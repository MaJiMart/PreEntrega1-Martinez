import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {

    return (
        <div className='shop'>
            <div className="storeIcon">
                <FontAwesomeIcon icon={faStore} />
            </div>
            <span id='cantidadCarrito'> 0 </span>
        </div>

    )
}
import { CartWidget } from "../CartWidget/CartWidget"
import logo from '../../assets/logoNombre.png'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='logospace'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href=''>Caramelos</a></li>
                    <li><a href=''>Chocolates</a></li>
                    <li><a href=''>Galletas</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

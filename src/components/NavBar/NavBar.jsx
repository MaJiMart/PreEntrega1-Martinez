import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className="logospace">
                <div className='logospace'>
                    <img src='/logoNombre.png' alt="logo de Que Chucheria" />
                </div>
            </Link>
            <nav>
                <NavLink to='/category/caramelos' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Caramelos</NavLink>
                <NavLink to='/category/chocolates' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Chocolates</NavLink>
                <NavLink to='/category/galletas' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Galletas</NavLink>
            </nav>
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </div>
    )
}
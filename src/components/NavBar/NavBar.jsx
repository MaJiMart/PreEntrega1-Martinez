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
            
            {/* codigo para menu hamburguesa */}
            <input type="checkbox" id="menuCheck"/>
            <label id="menu" for="menuCheck">
                <span id="menuAbrir">&#9776;</span>
                <span id="menuCerrar">X</span>
            </label>
            
            <nav>
                <div>
                <NavLink to='/category/caramelos' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Caramelos</NavLink>
                <NavLink to='/category/chocolates' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Chocolates</NavLink>
                <NavLink to='/category/galletas' className={({ isActive }) => isActive ? 'isActive' : 'isNotActive'}>Galletas</NavLink>
                </div>
            </nav>
                <CartWidget />    
        </div>
    )
}
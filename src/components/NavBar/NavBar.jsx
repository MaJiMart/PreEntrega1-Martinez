import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='logospace'>
                <img src='./public/logoNombre.png' alt="logo de Que Chucheria" />
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

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailCountainer } from './components/ItemDetailCountainer/ItemDetailCountainer';
import { NotFound } from './components/NotFound/NotFound';
import { CartContext } from './context/cartContext';
import { Cart } from './components/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
      {/* <CartContext.Provider> */}
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/detalle/:prod' element={<ItemDetailCountainer />} />

          <Route path='/cart' element={<Cart/>} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      {/* </CartContext.Provider> */}
    </BrowserRouter>
  )
}

export default App

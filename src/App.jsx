import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailCountainer } from './components/ItemDetailCountainer/ItemDetailCountainer';
import { NotFound } from './components/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detalle/:prod' element={<ItemDetailCountainer />} />

        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <ItemCount />
    </BrowserRouter>
  )
}

export default App

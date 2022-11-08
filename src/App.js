import './App.css';

import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Reserva from './components/Reserva';
import Contacto from './components/Contacto';
import NavBarRestaurant from './layouts/Navbar';



function App() {
 return (
  <div className='App'>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<NavBarRestaurant />}>
      <Route index element={<Inicio />}/>
      <Route path='Menu' element={<Menu />}/>
      <Route path='Reserva' element={<Reserva />}/>
      <Route path='Contacto' element={<Contacto />}/>
    

      <Route path='*' element={ <Navigate replace to="/"/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </div>
 )
    
  
}

export default App;

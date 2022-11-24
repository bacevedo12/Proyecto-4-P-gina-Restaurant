
import menu from './data.js'
import Platos from "./Platos.js";
import "./menu.css";

const platoEntrada = menu.filter((element) => element.category === "Entradas Frías");
const platoFondo = menu.filter((element) => element.category === "Plato de Fondo");
const platoPostre = menu.filter((element) => element.category === "Postre");

const Menu= () =>{
    return (
    <div className='menu'>
        <h1 className='text-black'>Menu</h1>
        <hr></hr>
            <h1 className='menus'>Entradas Frías</h1>
                <div className='d-flex justify-content-center'>            
                <Platos  items={platoEntrada}/>
                </div>
            
        <hr></hr>
            <h1 className='menus'>Platos de Fondo</h1>
                <div className='d-flex justify-content-center'>            
                    <Platos  items={platoFondo}/>
                    </div>
                    <hr></hr>

            <h1 className='menus'>Postres</h1>
                <div className='d-flex justify-content-center'>            
                    <Platos  items={platoPostre}/>
                    </div>
        
         </div>
        
    
    )
}

export default Menu
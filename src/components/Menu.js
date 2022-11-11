
import menu from './data.js'
import Platos from "./Platos.js";
import '../App.css';


const Menu= () =>{
    return (
    <div className='menu'>
        <h1 className='menus'>Menu</h1>
        <div className='d-flex justify-content-center'>
            
            <Platos  items={menu}/>

            </div>
         </div>
           
    
    )
}

export default Menu
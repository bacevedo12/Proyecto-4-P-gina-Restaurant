
import menu from './data.js'
import Platos from "./Platos.js";



const Menu= () =>{
    return (
    <div>
        <h1>Menu</h1>
        <div className='container d-flex justify-content-center'>
            <div className='row justify-content-center'>
            <Platos  items={menu}/>

            </div>
         </div>
           
    </div>
    )
}

export default Menu
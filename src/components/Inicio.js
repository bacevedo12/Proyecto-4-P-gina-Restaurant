import React from "react";
import "./Inicio.css";
import ControlledCarousel from './Carousel'

const Inicio = () =>{
    return (
        <div className="contenedor">
        <main className="row m-3 p-0">
            <div className="imagenInicio">
                <div className="Inicio">
                <div className="tituloInicio">
                 <h1>Puerto Sirena Restaurant</h1>
                </div>  
                <div className="parrafoInicio">
                    <h4 className="tamanoletra"> Somos un restaurant familiar de marisquería tradicional de pescados y mariscos 
                     ubicado en las costas de la región de Bío-Bío. Llevamos más de 30 años deleítando el paladar de 
                     nuestros clientes con una propuesta fresca y sabrosa.</h4>
                     <br/>
                    <h4 className="tamanoletra"> Nuestro Chef día a día ensaya y prueba distinas combinaciones de los productos de nuestro mar y 
                     tierra para entregarles una experiencia gastronomica de primer nivel.</h4>
                </div> 
                </div> 
            </div>
  
        </main>
        <div className="tituloCarousel">
            <h1 className="m-4">Algunos de nuestros platos</h1>
            <br></br>
        </div>
        <div className="mb-5 carousel">
            <ControlledCarousel/>
        </div>
        </div>
       
    )
}

export default Inicio
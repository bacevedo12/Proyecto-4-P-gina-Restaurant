import React from "react";
import "./Inicio.css";
import ControlledCarousel from './Carousel'

const Inicio = () =>{
    return (
        <div className="contenedor">
        <main className="row align-items-center justify-content-around contenedorInicio">
            <div className="col-xs-12 col-lg-6 mb-4 imagenInicio">
                <img alt="Restaurant"src='./images/imagenrestaurant.jpg' style={{ width: '80%' }} /> 
            </div>
            <div className="col-xs-12 col-lg-6 contenedorParrafo">
                <div className="tituloInicio">
                 <h1>Puerto Sirena Restaurant</h1>
                </div>  
                <div className="parrafoInicio">
                    <h4> Somos un restaurant familiar de marisquería tradicional de pescados y mariscos 
                     ubicado en las costas de la región de Bío-Bío. Llevamos más de 30 años deleítando el paladar de 
                     nuestros clientes con una propuesta fresca y sabrosa.</h4>
                     <br/>
                    <h4> Nuestro Chef día a día ensaya y prueba distinas combinaciones de los productos de nuestro mar y 
                     tierra para entregarles una experiencia gastronomica de primer nivel.</h4>
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
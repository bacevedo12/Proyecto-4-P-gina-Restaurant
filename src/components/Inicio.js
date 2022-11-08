import React from "react";
import "./Inicio.css";


const Inicio = () =>{
    return (
        <section className="contenedorInicio">
            <div className="imagenInicio">
                <img src='{imgPortada}'/> 
            </div>
            <div className="contenedorParrafo">
                <div className="tituloInicio">
                 <h1>PUERTO SIRENA RESTAURANT</h1>
                </div>  
                <div className="parrafoInicio">
                    <p> Somos un restaurant familiar de marisquería tradicional de pescados y mariscos 
                     ubicado en las costas de la región de Bío-Bío. Llevamos más de 30 años deleítando el paladar de 
                     nuestros clientes con una propuesta fresca y sabrosa.</p>
                    <p> Nuestro Chef día a día ensaya y prueba distinas combinaciones de los productos de nuestro mar y 
                     tierra para entregarles una experiencia gastronomica de primer nivel.</p>
                </div>  
            </div>  
        </section>
     
    )
}

export default Inicio
import React from "react";
import "./Inicio.css";



const Inicio = () =>{
    return (
        <div className="contenedor">
        <main className="d-flex flex-row justify-content-around contenedorInicio">
            <div className="imagenInicio">
                <img src='./images/imagenrestaurant.jpg'/> 
            </div>
            <div className="mt-5 ms-5 me-5 contenedorParrafo">
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
        </main>
        <section className="d-flex flex-row">
        <img className="col-4 col-md-4" src='./images/machas-parmesana.jpg'/> 
        <img className="col-4 col-md-4" src='./images/ceviche.jpg'/>
        <img className="col-4 col-md-4" src='./images/paila-marina.jpg'/>
        </section>
        </div>
       
    )
}

export default Inicio
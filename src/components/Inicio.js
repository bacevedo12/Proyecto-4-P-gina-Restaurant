import React from "react";
import "./Inicio.css";



const Inicio = () =>{
    return (
        <div className="contenedor">
        <main className="d-flex flex-row justify-content-around contenedorInicio">
            <div className="imagenInicio">
                <img src='./imagenrestaurant.jpg'/> 
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
        <footer className="parrafoFooter">
           <div className="d-flex flex-row justify-content-around contenedorFooter">
           <div>
                <img src='./logo-restaurant.jpg' className="imagenLogo" />
            </div>
            <div >
                <h3>Dirección</h3>
                <p>Av.Costanera 4358, Tomé </p>
                <button className="btnicono me-4"><i class="fa-brands fa-square-instagram"></i></button>
                <button className="btnicono"><i class="fa-brands fa-facebook"></i></button>
            </div>
            <div>
                <h3>Contacto</h3>
                <p>Telefono: 41-35467498 - 9-82386395</p>
                <p>puerto_sirena@gmail.com</p>
            </div>
           </div> 
        </footer>
        </div>
    )
}

export default Inicio
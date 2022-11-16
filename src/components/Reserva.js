import React, { useState } from "react";
import "./Reserva.css";
import {getfirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, getFirestore} from 'firebase/firestore';
import { db } from './FireBase.js';


function FormularioReserva(){
   
    const valorInicial = {
        nombre:'',
        apellido:'',
        email:'',
        numeroPersonas:'',
        fecha:'',
        hora:''
    }

    const [reserva, setReserva] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setReserva({...reserva, [name]:value})
    }

    const guardarDatos = async(e) => {
      e.preventDefault();
    //   console.log(reserva);
    try {
        await addDoc(collection(db,'reservas'), {
            ...reserva
        })
    } catch (error) {
        console.log(error);
    }
      setReserva({...valorInicial})
      
    }

return(
    <section className="contenedor">
     <main className= "row align-items-center justify-content-center" >
        <div className="col-xs-12 col-lg-6 border border-warning border-4 me-4 reserva">
        <h2 className="tituloReserva mt-3" >Reserva tu mesa</h2>
        <br />
        <form onSubmit={guardarDatos} className="text-white bg-light">
            <div>
            <label htmlFor="nombre" className="m-2">Nombre</label><br/>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"
             onChange={capturarInputs} value={reserva.nombre} />
            </div>
            <div>
            <label htmlFor="apellido" className="m-2" >Apellido</label><br/>
            <input type="text" id="apellido" name="apellido" placeholder="Apellido"
             onChange={capturarInputs} value={reserva.apellido}/>
            </div>
            <div>
            <label htmlFor="mail" className="m-2" >Mail</label><br/>
            <input type="email" id="email" name="email" placeholder="Mail"
             onChange={capturarInputs} value={reserva.email}/>
            </div>
            <div>
            <label htmlFor="number" className="m-2" >N° Personas</label><br/>
            <input type="number" id="number" name="numeroPersonas" placeholder="N° Personas"
             onChange={capturarInputs} value={reserva.numeroPersonas}/>
            </div>
            <div>
             <label htmlFor="fecha" className="m-2">Fecha</label><br/>
             <input type="date" id="fecha" name="fecha" placeholder="Fecha"
              onChange={capturarInputs} value={reserva.fecha}  />
            </div>
            <div>
             <label htmlFor="hora" className="m-2">Hora</label><br/>
             <input type="time" id="hora" name="hora" min="11:30" max="23:00" step="3600" placeholder="Hora"
              onChange={capturarInputs} value={reserva.hora}  />
            </div>
            <div>
            <button type="submit" className="btn btn-warning btn-lg m-3" id="boton" name="boton" >Reservar </button>
            </div>
        </form>
        </div>
        <div className="col-xs-12 col-lg-6 mb-4">
        <img className="imagenReserva w-100" alt="Restaurant"src='./images/foto.mesa.restaurant.jpg'/>
        </div>
        </main>
    </section>
)
}

export default FormularioReserva;
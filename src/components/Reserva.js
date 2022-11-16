import React, { useState } from "react";

import "./Reserva.css";
import { collection, addDoc} from 'firebase/firestore';

import { db } from './FireBase.js';
import Swal from 'sweetalert2';


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
        Swal.fire(
            'Su reserva se ha enviado con exito!',
            '',
            'success'
          )
    } catch (error) {
        console.log(error);
        Swal.fire(
            'Ups algo a fallado, intente nuevamente!',
            '',
            'warning'
          )
    }
      setReserva({...valorInicial})
      
    }

return(
    <section >
     <main className= "container-fluid row align-items-center mainreserva" >
        <div className="col-lg-4 col-sm-6 border border-warning border-4 reserva ">
        <h2 className="tituloReserva mt-3" >Reserva tu mesa</h2>
        <br />
        <form onSubmit={guardarDatos} className="text-white bg-light ">
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
    </main>
    </section>
)
}

export default FormularioReserva;
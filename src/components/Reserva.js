import React, { useState } from "react";
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
    <section>
        <h2 className="text-white">Reserva tu mesa</h2>
        <br />
        <form onSubmit={guardarDatos} className="text-white">
            <div>
            <label htmlFor="nombre" className="m-3">Nombre</label>
            <input type="text" id="nombre" name="nombre"
             onChange={capturarInputs} value={reserva.nombre} />
            </div>
            <div>
            <label htmlFor="apellido" className="m-3" >Apellido</label>
            <input type="text" id="apellido" name="apellido"
             onChange={capturarInputs} value={reserva.apellido}/>
            </div>
            <div>
            <label htmlFor="mail" className="m-3" >Email</label>
            <input type="email" id="email" name="email"
             onChange={capturarInputs} value={reserva.email}/>
            </div>
            <div>
            <label htmlFor="number" className="m-3" >Numero de personas</label>
            <input type="number" id="number" name="numeroPersonas"
             onChange={capturarInputs} value={reserva.numeroPersonas}/>
            </div>
            <div>
             <label htmlFor="fecha" className="m-3">Fecha</label>
             <input type="date" id="fecha" name="fecha"
              onChange={capturarInputs} value={reserva.fecha}  />
            </div>
            <div>
             <label htmlFor="hora" className="m-3">hora</label>
             <input type="time" id="hora" name="hora" min="11:30" max="23:00" step="3600"
              onChange={capturarInputs} value={reserva.hora}  />
            </div>
            <div>
            <button type="submit" className="btn btn-primary m-3" id="boton" name="boton" >Reservar </button>
            </div>
        </form>
    </section>
)
}

export default FormularioReserva;
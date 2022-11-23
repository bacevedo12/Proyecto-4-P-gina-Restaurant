import React, { useState } from "react";
import { collection, addDoc} from 'firebase/firestore';
import { db } from './FireBase.js';
import Swal from 'sweetalert2';
import "./Contacto.css";

function FormularioContacto(){
   
    const valorInicial = {
        nombre:'',
        apellido:'',
        email:'',
        celular:'',
        mensaje:'',
    }

    const [contacto, setContacto] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setContacto({...contacto, [name]:value})
    }

    const guardarDatos = async(e) => {
      e.preventDefault();
           console.log(contacto);
    if (contacto.nombre === '' || contacto.apellido === '' || contacto.email === '' || contacto.celular === '' || contacto.mensaje === '') {
        Swal.fire(
            'Ups algo a fallado, intente nuevamente!',
            '',
            'warning'
          );
    } else {
        try {
            await addDoc(collection(db,'mensajes'), {
                ...contacto
            })
            Swal.fire(
                'Su mensaje se ha enviado con exito!',
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
         
    }
    setContacto({...valorInicial})
}

   
    
   
     
return(
    <section className="row seccionContacto" >

        <div className="contacto col-lg-4 col-sm-6 border border-warning border-5 mt-5 mb-5">
            <h2 className="tituloContacto mt-5 text-black" >¿Tienes consultas?, envíanos un mensaje</h2>
            <br />
            <form onSubmit={guardarDatos} className="text-white m-4 bg-light formularioContacto">
                <div>
                <br/>
                <input className="mensaje" type="text" id="nombre" name="nombre" placeholder="Nombre"
                onChange={capturarInputs} value={contacto.nombre} />
                </div>
                <div>
                <br/>
                <input className="mensaje" type="text" id="apellido" name="apellido" placeholder="Apellido"
                onChange={capturarInputs} value={contacto.apellido}/>
                </div>
                <div>
                <br/>
                <input className="mensaje" type="email" id="email" name="email" placeholder="Mail"
                onChange={capturarInputs} value={contacto.email}/>
                </div>
                <div>
                <br/>
                <input className="mensaje" type="text" id="celular" name="celular" placeholder="Celular (+569)"
                onChange={capturarInputs} value={contacto.celular}/>
                </div>
                <div>
                <br/>
                <textarea className="mensaje" type="text" id="mensaje" name="mensaje" placeholder="Escribenos tu mensaje"
                onChange={capturarInputs} value={contacto.mensaje}  />
                </div>

                <div>
                <button type="submit" className="btn btn-warning btn-lg m-3" id="boton" name="boton" >Enviar </button>
                </div>
            </form>
        </div>
    </section>
)
}

export default FormularioContacto;
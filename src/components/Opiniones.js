import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db } from './FireBase.js';
import Swal from 'sweetalert2';
import "./Contacto.css";
//import { async } from "@firebase/util";

function Opiniones(){
   
    const valorInicial = {
        nombre:'',
        mensaje:'',
    }

    const [opinion, setOpinion] = useState(valorInicial)
    const [lista, setLista] = useState([])

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setOpinion({...opinion, [name]:value})
    }

    const guardarDatos = async(e) => {
      e.preventDefault();
           console.log(opinion);
    if (opinion.nombre === '' || opinion.mensaje === '') {
        Swal.fire(
            'Ups algo a fallado, intente nuevamente!',
            '',
            'warning'
          );
    } else {
        try {
            await addDoc(collection(db,'opiniones'), {
                ...opinion
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
    setOpinion({...valorInicial})
}

// funcion para renderizar opiniones 
const getLista = async()=>{
    try{
     const querySnapshot = await getDocs(collection(db, 'opiniones'))
     const docs = []
     
     querySnapshot.forEach((doc) => {
        
        docs.push({...doc.data(), id:doc.id})
     })
    setLista(docs)

    }catch (error) {
        console.log(error)
    }
   }
useEffect(() => {
   
   getLista()
   
},[lista])


return (
        <section className="row seccionContacto" >

          <div className="col contacto">
            <h2 className="tituloContacto mt-3" >Dejanos tu opinion de nuestro restaurant</h2>
            <br /> 
            <form  onSubmit={guardarDatos} className="text-white  ">
                <div>
                <br/>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"
                onChange={capturarInputs} value={opinion.nombre} />
                </div>
                <div>
                <br/>
                <textarea className=" mensaje" type="text" id="mensaje" name="mensaje" placeholder="Escribenos tu opinion"
                onChange={capturarInputs} value={opinion.mensaje}/>
                </div>

                <div>
                <button type="submit" className="btn btn-warning btn-lg m-3" id="boton" name="boton" >Enviar </button>
                </div>
            </form>
        </div>
        <div>
            <h2 className="text-white">Opiniones</h2>
            <div className="conteiner card">
                <div className="card-body">
                    {
                        lista.map(opinion => (
                           <div key={opinion.id}>
                            <p>{opinion.nombre}:</p>
                            <p>{opinion.mensaje}</p>
                           </div>

                         ) )
                    }

                </div>
            </div>

        </div>  
    </section>
)}


    

export default Opiniones
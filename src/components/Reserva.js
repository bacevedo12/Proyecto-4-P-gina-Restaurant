import React, { useState } from "react";

function FormularioReserva(){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    };

return(
    <section>
        <h2 className="text-white">Reserva tu mesa</h2>
        <br />
        <form onSubmit={handleSubmit} className="text-white">
            <div>
            <label htmlFor="nombre" className="m-3">Nombre</label>
            <input type="text" id="nombre" name="nombre"
            value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="apellido" className="m-3" >Apellido</label>
            <input type="text" id="apellido" name="apellido"
            value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="mail" className="m-3" >Email</label>
            <input type="email" id="email" name="email"
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="number" className="m-3" >Numero de personas</label>
            <input type="number" id="number" name="number"
            value={number} onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <div>
             <label htmlFor="fecha" className="m-3">Fecha</label>
                <input type="date" id="fecha" name="fecha"
                 value={fecha} onChange={(e) => setFecha(e.target.value)}/>
            </div>
            <div>
            <button type="submit" className="btn btn-primary m-3" id="boton" name="boton" >Reservar </button>
            </div>
        </form>
    </section>
)
}

export default FormularioReserva;
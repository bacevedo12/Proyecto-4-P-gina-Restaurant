import React, { useState } from "react";

function FormularioReserva(){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

return(
    <section>
        <h2>Reserva tu mesa</h2>
        <br />
        <form>
            <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"
            value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <br/>
            <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido"
            value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <br/>
        </form>
    </section>
)
}

export default FormularioReserva;
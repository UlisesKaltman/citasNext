'use client'
import React,{useState} from "react"; 
import Citas from "../components/Citas/Citas.js";
import Formulario from "../components/formulario/formulario.js";

function Reserva(){

  const [citas,setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas} citas={citas} />
          <Citas citas={citas} setCitas={setCitas} />
        </div>
        </div>    
    </>
  );
}

export default Reserva;
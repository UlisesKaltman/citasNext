'use client'
import React,{useState, useEffect} from "react"; 
import Citas from "../components/Citas/Citas.js";
import Formulario from "../components/formulario/formulario.js";

function Reserva(){
  
  
  const localCitas = localStorage.getItem("citas");
  
  const [citas, setCitas] = useState(localCitas ? JSON.parse(localCitas) : []);

  useEffect(() => {
    // Guardar citas en localStorage cada vez que cambien
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);
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
import React from "react";
import Cita from "../Cita/Cita.js"
function Citas({citas,setCitas}) {
  
  return (   
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map(item=>(
        <Cita key={item.id} cita={item} setCitas={setCitas} citas={citas}/>
      ))}            
    </div>    
  );
}

export default Citas;

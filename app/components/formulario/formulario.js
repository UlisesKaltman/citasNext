
import React,{useState} from "react"; //useState

function Formulario({setCitas,citas}) {
  const [idContador, setIdContador] = useState(1);
  const agregarCita = ()=>{    
    //validar campos
    const mascotaInput = document.querySelector("#mascota").value;
    const propietarioInput = document.querySelector("#propietario").value;
    if (!isNaN(mascotaInput)) {
      alert("El nombre de la mascota no puede ser un número.");
      return;
    }

    if (!isNaN(propietarioInput)) {
      alert("El nombre del dueño no puede ser un número.");
      return;
    }
    //crear un objeto nuevo con los valores del form
    
    const generarId = ()=>{
      setIdContador(prevId => prevId + 1);
      return idContador;
    }
    
    const obj = {
      id: generarId(),
      mascota: document.querySelector("#mascota").value,
      propietario: document.querySelector("#propietario").value,
      fecha: document.querySelector("#fecha").value,
      hora: document.querySelector("#hora").value,
      sintomas: document.querySelector("#sintomas").value

    } 
    //agregar el objeto nuevo a mi array de citas
    setCitas([...citas,obj]);
  }

  return (   
    <div className="one-half column">
        <h2>Crear mi Cita</h2>        
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" id="mascota" className="u-full-width" placeholder="Nombre Mascota" />
          <label>Nombre Dueño</label>
          <input type="text" name="propietario" id="propietario"className="u-full-width" placeholder="Nombre dueño de la mascota" />
          <label>Fecha</label>
          <input type="date" name="fecha" id="fecha"className="u-full-width" />
          <label>hora</label>
          <input type="time" name="hora" id="hora"className="u-full-width"  />
          <label>Sintomas</label>
          <textarea type="text" name="sintomas" id="sintomas" className="u-full-width" />
          <button type="button" className="u-full-width button-primary" onClick={()=>agregarCita()}>Agregar Cita</button>
        
      </div>
  );
}

export default Formulario;

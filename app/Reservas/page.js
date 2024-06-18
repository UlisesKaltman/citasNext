import Link from 'next/link';
import AgreagrCita from "../agregarCita/agregarCita.js"
import './css.css';
function reserva() {

  
    return (
      <>
      <nav>
        <ul>
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/Quienes-somos" class="nav-link">Quiénes somos</a></li>
          <li><a href="/Contacto" class="nav-link">Contacto</a></li>
        </ul>
      </nav>
        <h1>Reserva</h1> 
    <div className="one-half column">
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"  />
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width"  />
              <label>hora</label>
              <input type="time" name="hora" className="u-full-width"  />
              <label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea>
              <AgreagrCita></AgreagrCita>
            </form>
          </div>
      </>
    );
  }

  export default reserva;
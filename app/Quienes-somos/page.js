import Link from 'next/link';
import Image from 'next/image';
function Quienessomos() {

  
  return (
      <>
      <nav>
      <ul>
        <li><a href="/" class="nav-link">Home</a></li>
        <li><a href="/Contacto" class="nav-link">Contacto</a></li>
        <li><a href="/Reservas" class="nav-link">Reservas</a></li>
      </ul>
  </nav>
        <div class="Nosotros">
        <div class="card" >
        <div class="card-body">
                <h5 class="card-title">Ulises Kaltman</h5>
                 <p class="card-text">
   
                Ulises Kaltman, es el asistente veterinario en la clínica, un rol fundamental que desempeña con entusiasmo y dedicación.
                Su día a día incluye ayudar en la preparación de consultorios, apoyar durante las cirugías y procedimientos médicos, y
                asegurarse de que cada mascota reciba cuidados adecuados y afectuosos. Con una actitud amable y una disposición para aprender,
                Ulises se ha convertido en un miembro invaluable del equipo, siempre dispuesto a colaborar con el equipo veterinario y a brindar consuelo a los dueños preocupados.</p>
                <Image src="/images/ejemplo.jpg" alt="Descripción de la imagen" width={500} height={300} />
  </div>
  
</div>


<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Nicole Brunstein </h5>
    <p class="card-text">
      Nicole Brunstein, es una veterinaria apasionada por el bienestar animal. Con más de diez años de experiencia en la clínica, se especializa en el cuidado de mascotas domésticas
      y animales exóticos. Su amor por los animales la impulsa a proporcionar atención compasiva y experta a cada paciente que llega a la clínica. Además de sus habilidades médicas,
      Nicole se destaca por su capacidad para tranquilizar a los dueños preocupados y educarlos sobre el manejo y la salud de sus mascotas.</p>
      <Image src="/images/ejemplo2.jfif" alt="Descripción de la imagen" width={500} height={300} />
  </div>
</div>
</div>

      </>
    );
  }

  export default Quienessomos;
import Image from "next/image";
import Link from 'next/link';
import Quienessomos from "./Quienes-somos/page";
import Contacto from "./Contacto/page";
import reserva from "./Reservas/page";


const Home =()=>(
  <div>
    
    <h1>BIENVENIDOS A NUESTRO SITIO</h1>
    <Image src="/images/ejmplo3.jpg" alt="Descripción de la imagen" width={900} height={600} />
  </div>
);
export default Home;
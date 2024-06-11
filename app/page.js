import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Quienessomos from "./Quienes-somos/page";
import Contacto from "./Contacto/page";
import reserva from "./Reservas/page";


const Home =()=>(
  <div>
    <nav>
      <ul>
      
        <li style={styles.li}>
          <Link href="/Quienes-somos">Quienes somos</Link>
        </li>
        <li style={styles.li}>
          <Link href="/Reservas">Reservas</Link>
          </li>
          <li style={styles.li}>
          <Link href="/Contacto">Contacto</Link>
          </li>
      </ul>
    </nav>
    <h1>BIENVENIDOS A NUESTRO SITIO</h1>
  </div>
);
export default Home;
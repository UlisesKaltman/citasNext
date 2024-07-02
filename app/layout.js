import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import "./skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <ul>
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/Quienes-somos" class="nav-link">Quiénes somos</a></li>
          <li><a href="/Contacto" class="nav-link">Contacto</a></li>
        </ul>
      </nav>
      {children}
      </body>
    </html>
  );
}

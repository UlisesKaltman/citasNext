import React from 'react';
import './css.css';
import Link from 'next/link';
function Contacto() {
  return (
    <>
   
  
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Mail</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Especificaciones</label>
        <textarea className="form-control-textarea" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" >Enviar</button>
    </div>
    </>
    
  );
}

export default Contacto;


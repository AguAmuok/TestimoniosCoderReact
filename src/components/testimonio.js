import React from 'react';
import '../stylesheets/testimonio.css'

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/agu.JPG')}
        alt='imagen de agu'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Agustin en la Falda</p>
          <p className='cargo-testimonio'>Futuro Developer</p>
          <p className='texto-testimonio'>Soy Agustin un futuro developer Full Stack Mern
          Tengo una Honda XR 250 me gustan las milanesas, pizzas, asados y lomitos.</p> 
        </div>
    </div> 

  );
}

export default Testimonio;
    
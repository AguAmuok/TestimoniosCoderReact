import React from 'react';

function testmonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/agu.png')}
        alt='imagen de agu'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Agustin en la Falda</p>
          <p className='cargo-testimonio'>Futuro Developer</p>
          <p className='texto-testimonio'>Soy Agustin un futuro developer Full Stack Mern</p> 
        </div>
    </div> 

  );
}
    
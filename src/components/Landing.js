import React from 'react';

const Landing = () => (
  // Landing
  //   Saludo
  //   Descripcon
  //
  // Curriculum -> Dirige al curriculum

  <div className="landing">

    <div className="landing--content">
    <h1>Hola, Soy Luis Ángel Bustamante Márquez,</h1>
      <p>
        Soy desarrollador web con intereses en el diseño y
        la experiencia de usuario. Me gusta pensar en el usuario y
        las necesidades del mismo al momento de recopilar requerimientos
        y desarrollar una solución digital a un problema real.

        </p>

        <p className="landing--nota">
          Tambien me gusta la escena musical mexicana independiente.
        </p>
        <button>Ver Curriculum</button>
      </div>
  </div>
);

export default Landing;

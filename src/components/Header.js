import React from 'react';

const Header = (props) => (


  <nav className="nav fixed-top nav-fill">
    <a className="nav-link active" href="#">Proyectos</a>
    <a className="nav-link nav--boton" onClick={props.mostrarContacto}>Contacto</a>
    <a className="nav-link" href="#">
      <i className="fab fa-linkedin"></i>
    </a>
    <a className="nav-link" href="#">
      <i className="fab fa-github"></i>
    </a>
</nav>
);

export default Header;

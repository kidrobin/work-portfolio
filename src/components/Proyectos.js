import React from 'react';
import Proyecto from "./Proyecto";

export default class Proyectos extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <h2>Proyectos</h2>
        <div className="row">

          {
            this.props.proyectos.map( (proyecto) => (
              <Proyecto
                  key={proyecto.nombre}
                  nombre={proyecto.nombre}
                  imagenes={proyecto.imagenes}
                  enlace={proyecto.enlace}
                  descripcion={proyecto.descripcion}
                  />
            ))
          }
        </div>
      </div>
    )
  }
}

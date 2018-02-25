import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class Proyecto extends React.Component{
  constructor(props){
    super(props);
  }

  // Carrusel de imagenes
  // Titulo
  // Descripcion
  // Ir al sitio

  render(){
    return(
      <div className="col-md-6 proyecto">
        <div className="proyecto--contenido">

        <Carousel className="carrusel"
          showIndicators={false}
          showArrows={true}
          showThumbs={false}
          showStatus={false}>
            {
              this.props.imagenes.map( (imagen) => (
                <div key={imagen}>
                  <img src={imagen}/>
                </div>
              ))
            }

        </Carousel>

          <h3>{this.props.nombre}</h3>
          <p>{this.props.descripcion}</p>
          <a
            href={this.props.enlace}
            className="proyecto--boton"
            target="_blank">
            Ir Al Sitio
            </a>

        </div>
      </div>
    )
  }

}

import React from 'react';

export default class Contacto extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      contactos: [
        { icono: 'fa-mobile-alt', datoContacto: '5533417058'},
        { icono: 'fa-envelope', datoContacto: 'luisbustamante938@yahoo.com'},
        { icono: 'fas fa-map-marker', datoContacto: 'Coyoacán CDMX'},
      ]

    }
  }

  render(){
    return(
      <div className="contacto">
        <div className="container">
            {
              this.state.contactos.map( (contacto) => (

                <div key={contacto.datoContacto} className="row contacto--datos">
                  <div className="col-md-2">
                      <i className={`fas ${contacto.icono}`}></i>
                  </div>

                  <div className="col-md-10">
                      : {contacto.datoContacto}
                  </div>

                </div>
              ))
            }
        </div>
      </div>
    )
  }

}

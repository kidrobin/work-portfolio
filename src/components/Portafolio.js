import React from "react";
import Contacto from "./Contacto";
import Header from "./Header";
import Landing from "./Landing";
import Proyectos from "./Proyectos";
import GridSkills from "./GridSkills";
import Footer from "./Footer";

// const imagen = "https://cdn.contrastly.com/wp-content/uploads/night-landscape-1.jpg";
// const imagen = "./images/intranet1.png";
export default class Portafolio extends React.Component{

  constructor(props){
    super(props);

    this.animar = this.animar.bind(this);
    this.mostrarContacto = this.mostrarContacto.bind(this);

    this.state = {
      contacto: false,

      habilidades: [
        {nombre: 'HTML5',
         rama: 'frontend',
         experiencia: 'Uso profesional'},

        {nombre: 'CSS3',
         rama: 'frontend',
         experiencia: 'Uso profesional'},

        {nombre: 'SCSS',
         rama: 'frontend',
         experiencia: 'Este sitio esta diseñado con SCSS!'},

        {nombre: 'JavaScript',
        rama: 'frontend',
        experiencia: 'Uso de ES6 y OOP'},

        {nombre: 'Vue.JS',
        rama: 'frontend',
        experiencia: 'Implementado en la Intranet Corporativa de Laureate'},

        {nombre: 'React',
        rama: 'frontend',
        experiencia: 'Este sitio esta diseñado con React!'},

        {nombre: 'JSX',
        rama: 'frontend',
        experiencia: 'Este sitio esta maquetado con JSX!'},

        {nombre: 'PHP',
        rama: 'backend',
        experiencia: 'Implementado en Laureate International Universities'},

        {nombre: 'Laravel',
        rama: 'backend',
        experiencia: 'Framework MVC utilizado en Laurate International Universities'},

        {nombre: 'Node.JS',
        rama: 'backend',
        experiencia: 'Este sitio usa Node.JS de backend!'},

        {nombre: 'Express',
        rama: 'backend',
        experiencia: 'Este sitio usa Express de framework!'},

        {nombre: 'MySQL',
        rama: 'backend',
        experiencia: 'Driver principal de SQl'},

        {nombre: 'SQL',
        rama: 'backend',
        experiencia: 'Uso profesional para base de datos'}
      ],


      proyectos: [
          {
            imagenes: [
                "./images/intranet1.png",
                "./images/intranet2.png",
                "./images/intranet3.png",
                "./images/intranet4.png"
              ],
            nombre: 'Intranet',
            descripcion:'Intranet de Laureate',
            enlace: 'https://miespaciolaureate.com/intranet/'
          },

          {
            imagenes: [
                "./images/reconocimiento1.png",
                "./images/reconocimiento2.png",
                "./images/reconocimiento3.png",
                "./images/reconocimiento4.png",
                "./images/reconocimiento5.png"
              ],
            nombre: 'Mi Espacio de Reconocimiento',
            descripcion:'Red Social Corporativa',
            enlace: 'https://miespaciolaureate.com/reconocimiento/'
          },

          {
            imagenes: [
                "./images/jungle1.png",
                "./images/jungle2.png",
                "./images/jungle3.png",
                "./images/jungle4.png"
              ],
            nombre: 'Jungle',
            descripcion:'Red Social de Musica',
            enlace: 'https://nameless-lake-23795.herokuapp.com/'
          },
      ],

    }

  }

  mostrarContacto(){
    this.setState(
      (prevState) => ( {contacto: !prevState.contacto})
    );
  }

  animar(){
    // console.log('animar :)');
    // anime({
    //   targets: '.tsst',
    //   translateX: 250
    // });
    //
    // <div className="tsst"></div>
    // <button onClick={this.animar}>
    //   Clickmee
    // </button>
  }

  render(){
    return(
      <div>

        {this.state.contacto && <Contacto />}

        <Header mostrarContacto={this.mostrarContacto}/>

        <div className="container">
          <Landing />

          <GridSkills
            habilidades = {this.state.habilidades}
          />

          <Proyectos
            proyectos = {this.state.proyectos}
          />



          <Footer />
        </div>
      </div>
    )
  }

}

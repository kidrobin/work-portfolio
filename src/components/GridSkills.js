import React from 'react';
import GridSkill from "./GridSkill";

export default class GridSkills extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <h2>Habilidades</h2>
        <div className="row">

          {
            this.props.habilidades.map( (habilidad) => (
              <GridSkill
                  key={habilidad.nombre}
                  nombre={habilidad.nombre}
                  rama={habilidad.rama}
                  experiencia={habilidad.experiencia}
                  />
            ))
          }
        </div>
      </div>
    )
  }
}


// { this.state.habilidades.map( (habilidad) => (
//     <GridSkills
//       key={this.propsprops.habilidad.nombre}
//       nombre = {props.habilidad.nombre}
//       rama = {props.habilidad.rama}
//       experiencia = {props.habilidad.experiencia}
//     />
//   ))
// }

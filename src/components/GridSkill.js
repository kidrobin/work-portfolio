import React from 'react';

export default class GridSkill extends React.Component{
  constructor(props){
    super(props)
    this.mouseover = this.mouseover.bind(this);
    this.mouseout = this.mouseout.bind(this);

    this.state = {
      activado: true
    }
  }

  mouseover(){
    this.setState( (prevState) => ({
      activado: false
    }));
  }

  mouseout(){
    this.setState( (prevState) => ({
      activado: true
    }));
  }


  render(){
    return(
      <div className="col-md-3">

        <div
          onMouseOver={this.mouseover}
          onMouseOut={this.mouseout}
          className={`habilidad ${this.props.rama}`}
          >

          {
            this.state.activado ?
              <div className="habilidad--frente">
                {this.props.nombre}
              </div>
            :
              <div className="habilidad--descripcion">
                {this.props.experiencia}
              </div>
          }

        </div>
      </div>
    )
  }
}

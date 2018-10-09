import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component{
  render(){
    return(
      <header>
        <div className="titulo">Juego de cartas</div>
        <div>
        <button className="botonReiniciar" onClick={this.props.resetearPartida} >Reiniciar</button>
        </div>
        <div className="titulo">
        Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    )
  }
}
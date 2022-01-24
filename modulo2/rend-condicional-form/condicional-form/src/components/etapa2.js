import React from "react";
import "../styles.css";



export default class Etapa2 extends React.Component {

  
  render() {

    return (
      <div className="App">
        <h2>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual a unidade de ensino?</p>
        <input></input>
    
        <div className="separar">
          <button onClick={this.props.Etapa3}>Proxima etapa</button>
        </div>
      </div>
    );
  }
}

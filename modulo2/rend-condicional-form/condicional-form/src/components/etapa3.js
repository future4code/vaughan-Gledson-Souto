import React from "react";
import "../styles.css";


export default class Etapa3 extends React.Component {

  
  render() {

    return (
      <div className="App">
        <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

        <p>5. Por que você não terminou o curso de graduação?</p>
        <input></input>
        <div className="separar">
        <p>6. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inlês</option>
        </select>
        
        <div className="separar">
          <button onClick={this.props.Etapa4}>Proxima etapa</button>
        </div>
        </div>
      </div>
    );
  }
}

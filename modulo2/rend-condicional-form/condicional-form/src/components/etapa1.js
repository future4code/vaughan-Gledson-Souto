import React from "react";
import "../styles.css";



export default class Etapa1 extends React.Component {
 
  render() {
    
 
    return (
      <div className="App">
        <h2>Etapa 1 - DADOS GERAIS</h2>

        <p>1. Qual seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu e-mail?</p>
        <input></input>
        <div>
        <div className="separar">
        <p>4. Qual a sua escolaridade?</p>

        <select>
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
        </div>
      
        
        <div>
          <button onClick={this.props.Etapa2}>Proxima etapa</button>
        </div>
        </div>
      </div>
    );
  }
}
